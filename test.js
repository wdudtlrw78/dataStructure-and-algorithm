'use strict';

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

function solution(arr) {
  let answer = 0;
  let n = arr[0].length;
  let m = arr.length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let ctn = 0;
      for (let k = 0; k < m; k++) {
        let pi,
          pj = 0;
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) ctn++;
      }
      if (ctn === m) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(arr));
