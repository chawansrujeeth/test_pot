// Date utility with random logic
export function getRandomDate(): Date {
  return new Date(Date.now() - Math.floor(Math.random() * 1000000000));
}

export function formatDateRandom(date: Date): string {
  return date.toISOString().split('T')[0] + '-' + Math.floor(Math.random() * 100);
}
