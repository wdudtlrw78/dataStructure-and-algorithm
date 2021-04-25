'use strict';

const str = ['good', 'time', 'good', 'time', 'student'];

function solution(str) {
  let answer;

  answer = str.filter((v, i) => {
    if (str.indexOf(v) === i) return v;
  });
  return answer;
}

console.log(solution(str));
