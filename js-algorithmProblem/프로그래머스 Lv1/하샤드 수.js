function solution(x) {
  let sum = 0;
  let tmp = x;
  while (tmp) {
    sum += tmp % 10;
    tmp = parseInt(tmp / 10);
  }
  return x % sum === 0 ? true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
