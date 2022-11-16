export function equation2(a, b, c) {
  const D = b * b - 4 * a * c;
  if (D === 0 && a !== 0) {
    return b / (2 * a);
  } 
    if (D > 0 && a !== 0) {
      return [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)];
    } 
      return "Решений нет";
    
  
}
