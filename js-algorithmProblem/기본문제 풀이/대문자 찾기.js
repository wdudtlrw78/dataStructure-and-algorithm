'use stict';

function solution(string) {
  let count = 0;
  for (let x of string) {
    // 각 문자별 아스키 넘버
    // 대문자 : 65(A) ~ 90(Z)
    // 소문자 : 97(a) ~ 122(z)
    // let num = x.charCodeAt();
    // if (num >= 65 && num <= 90) count++;
    if (x === x.toUpperCase()) count++;
  }
  return count;
}

const string = 'KoreaTimeGood';
console.log(solution(string));
