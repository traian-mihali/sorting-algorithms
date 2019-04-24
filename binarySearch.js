function binarySearch(arr, element) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let middle = Math.floor((high + low) / 2);

    if (element === arr[middle]) return arr[middle];

    if (element < arr[middle]) high = middle - 1;
    else low = middle + 1;
  }

  return null;
}
