('use strict');

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
    horizontal = vertical = 0; // 0 초기화 안해버리면 계속 + 누적되니까 j문 전에 초기화
    for (let j = 0; j < n; j++) {
      horizontal += arr[i][j]; // 열 [0][0] [0][1] [0][2] ...
      vertical += arr[j][i]; // 행 [0][0] [1][0] [2][0] ...
    }

    leftOppositeAngle = rightOppositeAngle = 0;
    for (let i = 0; i < n; i++) {
      leftOppositeAngle += arr[i][i];
      rightOppositeAngle += arr[i][n - i - 1];
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
