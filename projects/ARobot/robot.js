const chalk = require('chalk');

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

function buildGraph(edges) {
  const graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (const [from, to] of edges.map(r => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

const VillageState = class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    }
    const parcels = this.parcels
      .map(p => {
        if (p.place !== this.place) return p;
        return { place: destination, address: p.address };
      })
      .filter(p => p.place !== p.address);
    return new VillageState(destination, parcels);
  }
};

function randomPick(array) {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

VillageState.random = function(parcelCount = 5) {
  const parcels = [];
  for (let i = 0; i < parcelCount; i += 1) {
    const address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address);
    parcels.push({ place, address });
  }
  return new VillageState('Post Office', parcels);
};

const mailRoute = [
  "Alice's House",
  'Cabin',
  "Alice's House",
  "Bob's House",
  'Town Hall',
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  'Shop',
  "Grete's House",
  'Farm',
  'Marketplace',
  'Post Office',
];

function findRoute(graph, from, to) {
  const work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i += 1) {
    const { at, route } = work[i];
    for (const place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

function routeRobot(state, memory) {
  let newMemory = memory;
  if (newMemory.length === 0) {
    newMemory = mailRoute;
  }
  return { direction: newMemory[0], memory: newMemory.slice(1) };
}

function goalOrientedRobot({ place, parcels }, route) {
  let newRoute = route;
  if (newRoute.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) {
      newRoute = findRoute(roadGraph, place, parcel.place);
    } else {
      newRoute = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: newRoute[0], memory: newRoute.slice(1) };
}

function findShortestParcel(parcels, place) {
  let shortestRoute;

  for (const parcel of parcels) {
    let route;
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
    shortestRoute =
      !shortestRoute || shortestRoute.length > route.length
        ? route
        : shortestRoute;
  }

  return shortestRoute;
}

function improvedGoalOrientedRobot({ place, parcels }, route) {
  let newRoute = route;
  if (newRoute.length === 0) {
    newRoute = findShortestParcel(parcels, place);
  }
  return { direction: newRoute[0], memory: newRoute.slice(1) };
}

function runRobot(state, robot, memory) {
  let dynamicMemory = memory;
  let dynamicState = state;
  let totalTurns = 0;
  for (let turn = 0; ; turn += 1) {
    if (dynamicState.parcels.length === 0) {
      console.log(chalk.yellowBright(`Done in ${turn} turns`));
      totalTurns = turn;
      break;
    }
    const { memory: newMemory, direction } = robot(dynamicState, dynamicMemory);
    dynamicState = dynamicState.move(direction);
    dynamicMemory = newMemory;
    console.log(`Moved to ${direction}`);
  }
  return totalTurns;
}

const compareRobots = (robot1, robot2, scenariosCount = 3) => {
  const parcels = 100;
  const robots1Steps = [];
  const robots2Steps = [];
  for (let i = 0; i < scenariosCount; i += 1) {
    const randomVillageState = VillageState.random(parcels);
    robots1Steps.push(runRobot(randomVillageState, robot1, []));
    robots2Steps.push(runRobot(randomVillageState, robot2, []));
  }

  const robot1Avg =
    robots1Steps.reduce((accum, curr) => accum + curr, 0) / robots1Steps.length;
  const robot2Avg =
    robots2Steps.reduce((accum, curr) => accum + curr, 0) / robots2Steps.length;

  console.log(
    `Robot1(${robot1.name}) avg steps = ${robot1Avg} and Robot2(${robot2.name}) avg steps = ${robot2Avg}`
  );
};

const robots = Object.freeze({
  random: randomRobot,
  route: routeRobot,
  oriented: goalOrientedRobot,
  improved: improvedGoalOrientedRobot,
});

module.exports = {
  compareRobots,
  robots,
};
