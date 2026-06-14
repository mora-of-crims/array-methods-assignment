export function filterEven(arr) {
  return arr.filter(n => n % 2 === 0);
}

export function doubleAll(arr) {
  return arr.map(n => n * 2);
}

export function sum(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}
