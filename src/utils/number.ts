export function convertOrdinalNumber(num: number) {
  const suffix = ['th', 'st', 'nd', 'rd'];
  const mod100 = num % 100;

  return num + (suffix[(mod100 - 20) % 10] || suffix[mod100] || suffix[0])!;
}
