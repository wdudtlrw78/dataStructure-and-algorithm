'use strict';

const arr = [87, 89, 92, 100, 76];
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(arr[i] < arr[j]);
    }
  }
  return answer;
}

console.log(solution(arr));
