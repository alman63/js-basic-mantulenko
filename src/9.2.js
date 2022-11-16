export function radius(R) {
  if (R >= 0) {
    const dlina = 2 * R * Math.PI;
    const ploshad = R * R * Math.PI;
    return [dlina, ploshad];
  } 
    return [NaN, NaN];
  
}
