'use strict';

function selectionSort(array) {
  const length = array.length;
  let lowest, temp, i, j;
  for (i = 0; i < length - 1; i++) { // 처음부터 흟는다.
    lowest = i; // 최솟 값
    for (j = i + 1; j < length; j++) {  // 최솟 값의 위치를 찾음
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    temp = array[lowest] // 최솟값 저장
    array[lowest] = array[i];
    array[i] = temp; // 최솟 값을 제일 앞으로 보냄
  }
  return array;
}

console.log(selectionSort([9, 1, 4, 5, 3, 2, 8, 7, 6]));
