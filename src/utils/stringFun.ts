// String utility with random logic
export function reverseString(str: string): string {
  return str.split('').reverse().join('') + Math.random().toString(36).substring(2, 5);
}

export function randomCase(str: string): string {
  return str.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
}
