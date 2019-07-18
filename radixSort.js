function radixSort(array) {
  let result = [];
  let range = 10;
  let base = 10;
  let max = Math.max(...array);

  while (max * range >= base) {
    let buckets = Array(range).fill(0);

    for (let value of array) {
      let index = Math.floor((value % base) / (base / 10));

      buckets[index] += 1;
    }

    for (let i = 1; i < buckets.length; i++) {
      buckets[i] = buckets[i - 1] + buckets[i];
    }

    for (let i = array.length - 1; i >= 0; i--) {
      let index = Math.floor((array[i] % base) / (base / 10));
      buckets[index] -= 1;

      result[buckets[index]] = array[i];
    }

    base *= 10;
    array = [...result];
  }
  return result;
}

mocha.setup("bdd");
const { assert } = chai;

describe("RadixSort", () => {
  it("Should sort the array0", () => {
    const array = [8, 4, 6, 9, 1, 7, 3, 0, 2, 5];
    assert.deepStrictEqual(radixSort(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("Should sort the array1", () => {
    const array1 = [6, 22, 55, 81, 77, 15, 6, 1, 18];
    assert.deepStrictEqual(radixSort(array1), [
      1,
      6,
      6,
      15,
      18,
      22,
      55,
      77,
      81
    ]);
  });

  it("Should sort the array2", () => {
    const array2 = [336, 120, 755, 51, 770, 15, 200, 444, 180];
    assert.deepStrictEqual(radixSort(array2), [
      15,
      51,
      120,
      180,
      200,
      336,
      444,
      755,
      770
    ]);
  });

  it("Should sort the array3", () => {
    const array3 = [7100, 3066, 966, 1556, 4518, 5222, 555, 3800, 8111];
    assert.deepStrictEqual(radixSort(array3), [
      555,
      966,
      1556,
      3066,
      3800,
      4518,
      5222,
      7100,
      8111
    ]);
  });
});

mocha.run();
