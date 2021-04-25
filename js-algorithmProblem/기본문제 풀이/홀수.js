'use strict';

const arr = [12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
  const answer = [];
  let sumNumber = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let oddNumber of arr) {
    if (oddNumber % 2 === 1) {
      sumNumber += oddNumber;
      if (oddNumber < min) min = oddNumber;
    }
  }
  answer.push(sumNumber);
  answer.push(min);
  return answer;
}

console.log(solution(arr)); // [256, 41]
