'use strict';

const arr = ['good', 'time', 'good', 'time', 'student'];

function solution(arr) {
  let answer;

  answer = arr.filter((v, i) => {
    if (arr.indexOf(v) === i) return v;
  });
  return answer;
}

console.log(solution(arr));
