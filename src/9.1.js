// проверка треугольника на прямой уол
export function triangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  } 
    if (
      a === Math.sqrt(b * b + c * c) ||
      c === Math.sqrt(b * b + a * a) ||
      b === Math.sqrt(a * a + c * c)
    ) {
      return true;
    }
    return false;
  
}
