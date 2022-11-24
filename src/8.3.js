// определения более молодого по дате рождения
export function whoIsYoung(data1, data2) {
  const arr1 = data1.split(".");
  const arr2 = data2.split(".");
  if (arr1 > arr2) {
    return "Первый моложе";
  } 
    if (arr1[1] === arr2[1] && arr1[0] === arr2[0] && arr1[2] === arr2[2]) {
      return "Они родились в один день";
    } 
      return "Второй моложе";
    
  
}
