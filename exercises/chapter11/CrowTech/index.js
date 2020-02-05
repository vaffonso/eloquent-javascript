const { bigOak } = require('./crow-tech');

const { defineRequestType } = require('./crow-tech');

defineRequestType('note', (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});

function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

const Timeout = class Timeout extends Error {};

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
      });
      setTimeout(() => {
        if (done) return;
        if (n < 3) attempt(n + 1);
        else reject(new Timeout('Timed out'));
      }, 250);
    }
    attempt(1);
  });
}

function requestType(name, handler) {
  defineRequestType(name, (nest, content, source, callback) => {
    try {
      Promise.resolve(handler(nest, content, source)).then(
        response => callback(null, response),
        failure => callback(failure)
      );
    } catch (exception) {
      callback(exception);
    }
  });
}

requestType('ping', () => 'pong');

function availableNeighbors(nest) {
  const requests = nest.neighbors.map(neighbor =>
    request(nest, neighbor, 'ping').then(
      () => true,
      () => false
    )
  );
  return Promise.all(requests).then(result =>
    nest.neighbors.filter((_, i) => result[i])
  );
}

const { everywhere } = require('./crow-tech');

everywhere(nest => {
  nest.state.gossip = [];
});

function sendGossip(nest, message, exceptFor = null) {
  nest.state.gossip.push(message);
  for (const neighbor of nest.neighbors) {
    if (neighbor === exceptFor) continue;
    request(nest, neighbor, 'gossip', message);
  }
}

requestType('gossip', (nest, message, source) => {
  if (nest.state.gossip.includes(message)) return;
  console.log(`${nest.name} received gossip '${message}' from ${source}`);
  sendGossip(nest, message, source);
});

requestType('connections', (nest, { name, neighbors }, source) => {
  const { connections } = nest.state;
  if (JSON.stringify(connections.get(name)) == JSON.stringify(neighbors))
    return;
  connections.set(name, neighbors);
  broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) {
  for (const neighbor of nest.neighbors) {
    if (neighbor === exceptFor) continue;
    request(nest, neighbor, 'connections', {
      name,
      neighbors: nest.state.connections.get(name),
    });
  }
}

everywhere(nest => {
  nest.state.connections = new Map();
  nest.state.connections.set(nest.name, nest.neighbors);
  broadcastConnections(nest, nest.name);
});

function findRoute(from, to, connections) {
  const work = [{ at: from, via: null }];
  for (let i = 0; i < work.length; i += 1) {
    const { at, via } = work[i];
    for (const next of connections.get(at) || []) {
      if (next === to) return via;
      if (!work.some(w => w.at === next)) {
        work.push({ at: next, via: via || next });
      }
    }
  }
  return null;
}

function routeRequest(nest, target, type, content) {
  if (nest.neighbors.includes(target)) {
    return request(nest, target, type, content);
  }
  const via = findRoute(nest.name, target, nest.state.connections);
  if (!via) throw new Error(`No route to ${target}`);
  return request(nest, via, 'route', { target, type, content });
}

requestType('route', (nest, { target, type, content }) =>
  routeRequest(nest, target, type, content)
);

requestType('storage', (nest, name) => storage(nest, name));

function findInStorage(nest, name) {
  return storage(nest, name).then(found => {
    if (found != null) return found;
    return findInRemoteStorage(nest, name);
  });
}

function network(nest) {
  return Array.from(nest.state.connections.keys());
}

function findInRemoteStorage(nest, name) {
  let sources = network(nest).filter(n => n !== nest.name);
  function next() {
    if (sources.length === 0) {
      return Promise.reject(new Error('Not found'));
    }
    const source = sources[Math.floor(Math.random() * sources.length)];
    sources = sources.filter(n => n !== source);
    return routeRequest(nest, source, 'storage', name).then(
      value => (value != null ? value : next()),
      next
    );
  }
  return next();
}

const Group = class Group {
  constructor() {
    this.members = [];
  }

  add(m) {
    this.members.add(m);
  }
};

function anyStorage(nest, source, name) {
  if (source === nest.name) return storage(nest, name);
  return routeRequest(nest, source, 'storage', name);
}

async function chicks(nest, year) {
  let list = '';
  await Promise.all(
    network(nest).map(async name => {
      list += `${name}: ${await anyStorage(nest, name, `chicks in ${year}`)}\n`;
    })
  );
  return list;
}

async function locateScalpel(nest) {
  const prop = 'scalpel';
  let nestNodeScalpelLocation;
  for (const nestNode of network(nest)) {
    nestNodeScalpelLocation = await anyStorage(nest, nestNode, prop);
    if (nestNode === nestNodeScalpelLocation) {
      break;
    }
  }

  return nestNodeScalpelLocation;
}

function locateScalpel2(nest) {
  const prop = 'scalpel';
  function loop(current) {
    //	console.log(current);
    return anyStorage(nest, current, prop).then(next => {
      if (next === current) {
        return current;
      }
      return loop(next);
    });
  }

  return loop(nest.name);
}
