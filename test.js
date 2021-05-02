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
  let n = arr.length;
  let horizontal = 0;
  let vertical = 0;
  let leftOppositeAngle = 0;
  let rightOppositeAngle = 0;

  for (let i = 0; i < n; i++) {
    horizontal = vertical = leftOppositeAngle = rightOppositeAngle = 0;
    for (let j = 0; j < n; j++) {
      horizontal += arr[i][j];
      vertical += arr[j][i];
    }
    answer = Math.max(
      horizontal,
      vertical,
      leftOppositeAngle,
      rightOppositeAngle
    );

    horizontal = vertical = leftOppositeAngle = rightOppositeAngle = 0;
    for (let k = 0; k < n; k++) {
      leftOppositeAngle += arr[k][k];
      rightOppositeAngle += arr[k][n - k - 1];
    }
    answer = Math.max(
      horizontal,
      vertical,
      leftOppositeAngle,
      rightOppositeAngle
    );
  }
  return answer;
}

console.log(solution(arr));
