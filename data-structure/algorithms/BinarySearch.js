'use strict';

let arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
function binarySearch(target, dataArray) {
  let low = 0;
  let high = dataArray.length - 1;
  let index = 0;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guess = dataArray[mid];
    if (guess === target) {
      return guess;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    index++;
    console.log(`${index}. low: ${low}, mid: ${mid}, high: ${high}, data: ${dataArray[mid]}`);
  }
  return undefined;
}

const result = binarySearch(1, arr);
console.log(result);

