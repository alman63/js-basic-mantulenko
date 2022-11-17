// возведение в степень числа
export function pow(a, x) {
  let p = 1;
  for (let i = 0; i < x; i++) {
    p *= a;
  }
  return p;
}
