'use strict';

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function solution(arr) {
  let answer = 0;
  let k = 0;

  for (let x of arr) {
    if (x === 1) {
      k++;
      answer += k;
    } else {
      k = 0;
    }
  }

  return answer;
}
console.log(solution(arr));
