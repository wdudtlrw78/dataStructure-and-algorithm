'use strict';

const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

function solution(card, n) {
  let answer;

  let a = new Set();
  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      for (let k = j + 1; k < card.length; k++) {
        a.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let s = Array.from(a).sort((a, b) => b - a);
  answer = s[n - 1];
  return answer;
}

console.log(solution(arr, 3));
