'use strict';

const arr = [12, 77, 38, 41, 53, 92, 85];
function solution(arr) {
  let answer = [];
  let sumNumber = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x % 2 === 1) {
      sumNumber += x;
      if (x < min) min = x;
    }
  }
  answer.push(sumNumber);
  answer.push(min);
  return answer;
}

console.log(solution(arr));
