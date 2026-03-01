function cariMedian(arr) {
  // you can only write your code here!
  let median = 0;
  let sortedArr = arr.sort((a, b) => a - b);

  if (sortedArr.length % 2 === 0) {
    const mid1 = sortedArr[sortedArr.length / 2 - 1];
    const mid2 = sortedArr[sortedArr.length / 2];

    median = (mid1 + mid2) / 2;
  } else {
    median = sortedArr[Math.floor(sortedArr.length / 2)];
  }

  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
