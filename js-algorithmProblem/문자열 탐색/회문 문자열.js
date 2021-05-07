'use strict';

// 1

let s = 'gooG';

function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  const len = s.length;

  for (let i = 0; Math.floor(i < len / 2); i++) {
    s[i] === s[len - i - 1] ? answer : (answer = 'NO');
  }
  return answer;
}

// 2

let s = 'gooG';

function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();

  s.split('').reverse().join('') === s ? answer : (answer = 'NO');
  return answer;
}

console.log(solution(s));
