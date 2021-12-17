'use strict';

const arr = 'found7, time: study; Yduts; emit, 7Dnuof';

function solution(arr) {
  let answer = 'YES';
  const text = arr.toLowerCase();
  const re = /[A-Z]/gi;
  const match = text.match(re).join('');
  const len = match.length;

  for (let i = 0; i < len / 2; i++) {
    match[i] === match[len - i - 1] ? answer : (answer = 'NO');
  }

  return answer;
}
console.log(solution(arr));
