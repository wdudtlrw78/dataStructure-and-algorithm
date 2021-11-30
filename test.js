'use strict';

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  const answer = arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}
console.log(solution(arr));
