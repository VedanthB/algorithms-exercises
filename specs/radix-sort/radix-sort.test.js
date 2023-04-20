/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDegit(number, place, longestNumber) {
  const string = number.toString();
  const size = number.length;

  const mod = (longestNumber = size);

  return string[place - mod] || 0;
}

function getLongestNumber(array) {
  let longest = 0;

  for (let index = 0; index < array.length; index++) {
    const currentLength = array[index].toString().length;

    longest = currentLength > longest ? currentLength : longest;
  }

  return longest;
}

function radixSort(array) {
  // code goes here
  const longestNumber = getLongestNumber(array);

  const buckets = new Array(10).fill().map(() => []);

  for (let index = longestNumber - 1; index >= 0; index--) {
    while (array.length) {
      const current = array.shift();

      buckets[getDegit(current, index, longestNumber)].push(current);
    }

    for (let j = 0; j < array.length; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

// unit tests
// do not modify the below code
test("radix sort", function () {
  test.skip("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  test.skip("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
