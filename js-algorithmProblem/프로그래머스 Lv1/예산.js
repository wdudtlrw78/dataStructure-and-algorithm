'use strict';

function solution(d, budget) {
  let answer = 0,
    sum = 0;
  d.sort((a, b) => a - b); // [1, 2, 3, 4, 5];

  for (let i = 0; i < d.length; i++) {
    answer++;
    sum += d[i];

    if (sum > budget) {
      answer--;
      break;
    }
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
