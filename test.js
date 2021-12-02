'use strict';

const arr = ['good', 'time', 'good', 'time', 'student'];

function solution(arr) {
  const answer = arr;

  return Array.from(new Set(answer));
}
console.log(solution(arr));
