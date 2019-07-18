function countingSort(array, base) {
  let result = Array(array.length);
  let range = Array(base).fill(0);

  for (let value of array) {
    range[value] += 1;
  }

  for (let n = 1; n < range.length; n++) {
    range[n] = range[n - 1] + range[n];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    let index = range[array[i]] - 1;
    range[array[i]] -= 1;

    result[index] = array[i];
  }

  return result;
}

console.log(countingSort([9, 3, 6, 5, 4, 9, 3, 1, 7], 10)); // [1, 3, 3, 4, 5, 6, 7, 9, 9]
console.log(countingSort([38, 12, 5, 57, 86, 53, 21, 9, 63, 5], 100)); //  [5, 5, 9, 12, 21, 38, 53, 57, 63, 86]
