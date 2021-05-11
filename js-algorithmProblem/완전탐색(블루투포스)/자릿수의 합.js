'use strict';

const arr = [128, 460, 603, 40, 521, 137, 123];

// 손 코딩

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0;
    let tmp = x;

    while (tmp) {
      // 128
      sum += tmp % 10; // 8 + 1 + 2 = 11
      tmp = parseInt(tmp / 10); // 1 + 2
    }

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

// 내장 함수

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0);
    console.log(sum);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

console.log(solution(7, arr));
