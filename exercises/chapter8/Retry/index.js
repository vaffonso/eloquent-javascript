class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  }
  throw new MultiplicatorUnitFailure('Klunk');
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    }
    throw error;
  }
}

module.exports = reliableMultiply;
