// Math utility with random logic
export function addRandom(a: number, b: number): number {
  return a + b + Math.floor(Math.random() * 10);
}

export function multiplyRandom(a: number, b: number): number {
  return a * b * (Math.random() > 0.5 ? 2 : 1);
}
