export function sum(a) {
  console.log(Math.floor(a / 100) + Math.floor((a / 10) % 10) + (a % 10));
  return Math.floor(a / 100) + Math.floor((a / 10) % 10) + (a % 10);
}
