'use strict';

function solution(arr) {
  const answer = Math.min(...arr);
  return answer;
}
const arr = [5, 3, 7, 11, 2, 15, 17];

console.log(solution(arr));
