'use strict';

const arr = [130, 135, 148, 140, 145, 150, 150, 153];

function solution(arr) {
  let answer = 1;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      answer++;
    }
  }

  return answer;
}
console.log(solution(arr));
