// Object utility with random logic
export function randomKey(obj: Record<string, any>): string {
  const keys = Object.keys(obj);
  return keys.length ? keys[Math.floor(Math.random() * keys.length)] : '';
}

export function mergeRandom(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
  return { ...obj1, ...obj2, random: Math.random() };
}
