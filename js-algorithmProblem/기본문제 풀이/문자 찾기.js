'use strict';

let str = 'COMPUTERPROGRAMMING';

// 1
// function solution(str, t) {
//   let counter = 0;
//   for (let s of str) {
//     if (s === t) {
//       counter++;
//     }
//   }

//   return counter;
// }

// 2 내장함수 spilt

// 구분자로 이용해 'R' 분리 후 - 1해주기
// 마지막에 R넣어도 구분자하면 빈 문자열 생기므로 똑같이 - 1
function solution(str, t) {
  let answer = str.split(t).length;
  return answer - 1;
}

console.log(solution(str, 'R'));
