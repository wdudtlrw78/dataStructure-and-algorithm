'use strict';

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

function solution(n, k) {
  let answer,
    sum = 0;

  for (let i = 0; i < k; i++) sum += n[i];
  answer = sum;

  for (let i = k; i < n.length; i++) {
    sum += n[i] - n[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

console.log(solution(arr, 3));
