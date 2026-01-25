// Array utility with random logic
export function randomElement<T>(arr: T[]): T | undefined {
  return arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;
}

export function doubleArray<T>(arr: T[]): T[] {
  return [...arr, ...arr];
}
