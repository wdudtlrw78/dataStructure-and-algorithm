'use strict';

const s = 'KKHSSSSSSSE';

function solution(s) {
  let answer = '';
  let count = 1;
  s = s + ' ';
  // s + ' '; 은 이유는 s[i + 1] 까지 구해야되고
  // s.length - 1 이유는 알파벳 (length 11) 까지 구해야되므로 s.length하면 ' ' (length 12) 까지 간다.
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      console.log(s[i]);
      answer += s[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}

console.log(solution(s));
