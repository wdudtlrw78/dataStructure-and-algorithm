'use strict';

const a = [1, 2, 1, 3, 1, 1, 1, 2];

function solution(arr, m) {
  let answer = 0;
  let n = arr.length;

  let p1 = 0;
  let p2 = 0;
  let sum = 0;

  while (p1 < n && p2 < n) {
    if (sum === m) {
      answer++;
      sum -= arr[p1++];
    } else if (sum > m) {
      sum -= arr[p1++];
    } else {
      sum += arr[p2++];
    }
  }

  return answer;
}

console.log(solution(a, 6));
