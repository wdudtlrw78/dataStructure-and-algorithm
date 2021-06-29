'use strict';

const arr = 'BACBACCACCBDEDE';

function solution(arr) {
  let answer = '';
  let student = new Map();

  for (let n of arr) {
    if (student.has(n)) student.set(n, student.get(n) + 1);
    else student.set(n, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, value] of student) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

console.log(solution(arr));
