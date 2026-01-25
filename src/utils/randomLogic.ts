// A utility file with new random logic functions

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function getRandomString(length: number): string {
  return Array.from({ length }, () => String.fromCharCode(97 + getRandomInt(26))).join("");
}

export function shuffleArray<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}

export function pickRandom<T>(arr: T[]): T {
  return arr[getRandomInt(arr.length)];
}
