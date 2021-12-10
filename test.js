'use strict';

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

function solution(arr) {
  let answer = 0;
  const length = arr.length;
  let row = 0;
  let col = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < length; i++) {
    row = 0;
    col = 0;
    for (let j = 0; j < length; j++) {
      row += arr[j][i];
      col += arr[i][j];
    }

    answer = Math.max(row, col);
  }

  for (let i = 0; i < length; i++) {
    left += arr[i][i];
    right += arr[i][length - i - 1];

    answer = Math.max(left, right);
  }

  return answer;
}
console.log(solution(arr));
