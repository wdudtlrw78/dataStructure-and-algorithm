'use strict';

let a = [1, 2, 1, 3, 1, 1, 1, 2];

function solution(n, m) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (left < n.length && right < n.length) {
    if (sum === m) {
      answer++;
      sum -= n[left++];
    } else if (sum > m) {
      sum -= n[left++];
    } else {
      sum += n[right++];
    }
  }
  return answer;
}

console.log(solution(a, 6));
