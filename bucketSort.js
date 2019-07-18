class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function bucketSort(array, size = array.length) {
  const buckets = [];

  for (let value of array) {
    let index = Math.floor((value * size) / (Math.max(...array) + 1));
    if (!buckets[index]) buckets[index] = new Node(value);
    else {
      let current = buckets[index];
      let previous = null;

      while (current.next) {
        if (current.value > value) {
          insertNode(buckets, index, current, previous, value);
          break;
        }
        previous = current;
        current = current.next;
      }

      if (!current.next) {
        if (current.value > value)
          insertNode(buckets, index, current, previous, value);
        else current.next = new Node(value);
      }
    }
  }

  return sortedValues(buckets);
}

const insertNode = (buckets, index, current, previous, value) => {
  let node = new Node(value);
  node.next = current;

  if (previous) previous.next = node;
  else buckets[index] = node;
};

const sortedValues = buckets => {
  const values = [];
  for (let node of buckets)
    while (node) {
      values.push(node.value);
      node = node.next;
    }

  return values;
};

mocha.setup("bdd");
const { assert } = chai;

describe("BucketSort", () => {
  it("should sort the array", () => {
    const array = [4, 1, 5, 3, 8, 6];

    assert.deepStrictEqual(bucketSort(array), [1, 3, 4, 5, 6, 8]);
  });

  it("should sort the array1", () => {
    const array1 = [8, 6, 7, 1, 3, 9, 2, 5, 4, 1, 3];

    assert.deepStrictEqual(bucketSort(array1, 3), [
      1,
      1,
      2,
      3,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });

  it("should sort the array2", () => {
    const array2 = [8, 15, 6, 11, 7, 4, 19, 16, 1, 14, 3];

    assert.deepStrictEqual(bucketSort(array2, 5), [
      1,
      3,
      4,
      6,
      7,
      8,
      11,
      14,
      15,
      16,
      19
    ]);
  });

  it("should sort the array3", () => {
    const array3 = [18, 45, 66, 41, 77, 34, 9, 16, 1, 32, 73, 88, 85];

    assert.deepStrictEqual(bucketSort(array3), [
      1,
      9,
      16,
      18,
      32,
      34,
      41,
      45,
      66,
      73,
      77,
      85,
      88
    ]);
  });
});

mocha.run();
