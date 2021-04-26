'use strict';

const numbers = [7, 3, 9, 5, 6, 12];

function solution(numbers) {
  let answer = [];
  answer.push(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) answer.push(numbers[i]);
  }
  return answer;
}

console.log(solution(numbers)); // [7, 9, 6, 12]
