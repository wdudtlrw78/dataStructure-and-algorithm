'use strict';

const arr = 'gooG';

function solution(arr) {
  let answer = 'YES';
  const text = arr.toUpperCase();

  for (let i = 0; i < text.length / 2; i++) {
    text[i] === text[text.length - i - 1] ? answer : (answer = 'NO');
  }
  return answer;
}
console.log(solution(arr));
