'use strict';

const arr = ['teacher', 'time', 'student', 'beautiful', 'good'];

function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(arr));
