'use strict';

// 1
function solution(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], i, str.indexOf(str[i]));
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
}

console.log(solution('ksekkset'));
