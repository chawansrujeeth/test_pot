// Math utility with random logic
export function addRandom(a: number, b: number): number {
  // Now returns the sum minus a random value
  return a + b - Math.floor(Math.random() * 5);
}

export function multiplyRandom(a: number, b: number): number {
  // Now multiplies and adds a random offset
  return a * b + Math.floor(Math.random() * 20);
}
