function quickSort(array) {
  if (array.length < 2) return array;

  const pivot = array[Math.floor(Math.random() * array.length)];
  let greater = [];
  let equal = [];
  let less = [];

  for (let item of array) {
    if (item > pivot) greater.push(item);
    else if (item < pivot) less.push(item);
    else equal.push(item);
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}
