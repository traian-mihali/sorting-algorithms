const insertionSort = array => {
  for (let i = 1; i < array.length; i++)
    for (let j = 0; j < i; j++)
      if (array[i] < array[j]) array.splice(j, 0, array.splice(i, 1)[0]);

  return array;
};

insertionSort([4, 9, 1, 6, 3, 5, 7, 2, 8]); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
