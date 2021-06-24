'use strict';

const a = [1, 3, 1, 2, 3];

function solution(arr, m) {
  let answer = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > m) {
      sum -= arr[left++];
    }
    answer += right - left + 1;
  }

  return answer;
}

console.log(solution(a, 5));
