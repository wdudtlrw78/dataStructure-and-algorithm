'use strict';

const arr = 'g0en2T0s8eSoft';

// 나의 코드 ( 내장 함수 )

function solution(arr) {
  let answer;
  return (answer = parseInt(arr.replace(/[^0-9]/g, ''), 10));
}

console.log(solution(arr));

// 강의

function solution(arr) {
  let answer = '';

  for (let x of arr) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);
}

console.log(solution(arr));

// 손 코딩 (parseInt X)

function solution(arr) {
  let answer = 0;

  for (let x of arr) {
    // 앞에 0이면 계속 0 * 10 + 0 = 0;
    // 2이면 0 * 10 + 2 = 2;
    // 0이면 2 * 10 + 0 = 20;
    // 8이면 20 * 10 + 8 = 208;
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }

  return answer;
}

console.log(solution(arr));
