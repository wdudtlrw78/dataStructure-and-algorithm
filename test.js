'use strict';

const arr = 'study';

function solution(arr) {
  const count = Math.floor(arr.length / 2);

  return arr.length % 2 === 0
    ? arr
        // good
        .substring(count - 1, count + 1)
    : arr.substring(count, count + 1);
}
console.log(solution(arr));
