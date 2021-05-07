'use strict';

// 1

const s = 'found7, time: study; Yduts; emit, 7Dnuof';

function solution(s) {
  let answer = 'YES';
  s = s.toUpperCase().replace(/[^A-Z]/g, '');
  s.split('').reverse().join('') === s ? answer : (answer = 'NO');

  return answer;
}

// 2

const s = 'found7, time: study; Yduts; emit, 7Dnuof';

function solution(s) {
  let answer = 'YES';
  s = s.toUpperCase().replace(/[^A-Z]/g, '');
  const len = s.length;

  for (let i = 0; Math.floor(i < len / 2); i++) {
    s[i] === s[len - i - 1] ? answer : (answer = 'NO');
  }

  return answer;
}

console.log(solution(s));
