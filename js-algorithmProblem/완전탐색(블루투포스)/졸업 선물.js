'use strict';

const arr = [
  [6, 6], // 28 - 9 = 17
  [2, 2], // 28 - 3 = 25
  [4, 3], //  28 - 5 = 23
  [4, 5], //  28 - 7 = 21
  [10, 3], // 28 - 8 = 20
];

function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  console.log(product);
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1; // 할인 받은 1명
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(solution(28, arr));
