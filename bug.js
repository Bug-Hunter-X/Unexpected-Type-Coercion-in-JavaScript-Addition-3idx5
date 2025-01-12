function add(a, b) {
  return a + b;
}

console.log(add(1, '2')); // Output: "12"

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(add(1, '2')); // throws an error