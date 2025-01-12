function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(add(1, 2)); // Output: 3
console.log(add(1, '2')); // throws an error