'use strict';

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count = count + i;
  }

  return count;
}

console.log(solution(10));
