'use strict';

function solution(a, b, c) {
  let answer = 'YES',
    max;
  const sum = a + b + c;

  if (a < b) max = b;
  else max = a;
  if (max < c) max = c;

  if (sum - max < max) return (answer = 'NO');
  else return answer;
}

console.log(solution(11, 7, 6));
console.log(solution(13, 33, 17));
