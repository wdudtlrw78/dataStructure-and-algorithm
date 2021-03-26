'use strict';

function selectionSort(array) {
  const length = array.length;
  let lowest, temp, i, j;
  for (i = 0; i < length - 1; i ++) {
    lowest = i;
    for (j = i + 1; j < length; j ++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    temp = array[lowest]
    array[lowest] = array[i];
    array[i] = temp;
  }
  return array;
} 

console.log(selectionSort([1, 9, 4, 5, 3, 2, 8, 7, 6]));