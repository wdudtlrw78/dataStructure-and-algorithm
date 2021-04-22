'use strict';

const str = 'ItisTimeStudy';

function solution(str) {
  let answer = '';
  for (let up of str) {
    if (up === up.toLowerCase()) answer += up.toUpperCase();
    else answer += up;
  }
  return answer;
}

function solution(str) {
  const answer = str.toUpperCase();

  return answer;
}

function solution(str) {
  let answer = '';
  for (let up of str) {
    // 각 문자별 아스키 넘버
    // 대문자 : 65(A) ~ 90(Z)
    // 소문자 : 97(a) ~ 122(z)
    let num = up.charCodeAt();

    // 97 - 32 = 65(A) , 98 - 32 = 66(B) ...
    // fromCharCode = 해당 아스키 코드 문자열로 변환해준다.
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += up;
  }
  return answer;
}

console.log(solution(str));
