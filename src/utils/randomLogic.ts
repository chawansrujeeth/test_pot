// A utility file with new random logic functions

export function getRandomInt(max: number): number {
  // Now returns a random even number less than max
  const n = Math.floor(Math.random() * max);
  return n % 2 === 0 ? n : n - 1;
}

export function getRandomString(length: number): string {
  // Now returns a string with random digits and letters
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[getRandomInt(chars.length)]).join("");
}

export function shuffleArray<T>(arr: T[]): T[] {
  // Now reverses the array and then shuffles
  const reversed = [...arr].reverse();
  return reversed.sort(() => Math.random() - 0.5);
}

export function pickRandom<T>(arr: T[]): T {
  // Now picks two random elements and returns one of them
  if (arr.length === 0) return undefined as any;
  const i1 = getRandomInt(arr.length);
  const i2 = getRandomInt(arr.length);
  return arr[Math.random() > 0.5 ? i1 : i2];
}
