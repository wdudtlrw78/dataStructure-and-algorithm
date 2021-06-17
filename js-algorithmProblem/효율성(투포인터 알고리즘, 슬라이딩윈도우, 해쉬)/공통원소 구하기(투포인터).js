'use strict';

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;

  arr1.sort();
  arr2.sort();

  let p1 = 0;
  let p2 = 0;

  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

console.log(solution(a, b));
