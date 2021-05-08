'use strict';

let s = 'teachermode';

function solution(s, t) {
  let answer = [];
  let p = 1000;

  for (let x of s) {
    p++;
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    p++;
    if (s[i] === t) p = 0;
    else {
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

console.log(solution(s, 'e'));
