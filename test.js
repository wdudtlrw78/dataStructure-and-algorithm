'use strict';

function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let s of arr) {
    let sum = 0;
    let tmp = s;
    while (tmp) {
      sum += tmp % 10;
      tmp = parseInt(tmp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = s;
    } else if (sum === max) {
      if (s > answer) answer = s;
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
