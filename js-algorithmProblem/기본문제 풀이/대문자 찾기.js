'use stict';

function solution(string) {
  let count = 0;
  for (let x of string) {
    if (x === x.toUpperCase()) {
      count++;
    }
  }
  return count;
}

const string = 'KoreaTimeGood';
console.log(solution(string));
