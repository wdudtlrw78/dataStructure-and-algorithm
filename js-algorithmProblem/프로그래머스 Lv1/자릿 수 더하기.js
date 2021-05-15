function solution(n) {
  return String(n)
    .split('')
    .map((v) => parseInt(v))
    .reduce((a, c) => a + c);
}

function solution(n) {
  return String(n)
    .split('')
    .reduce((a, c) => a + parseInt(c), 0); // parseInt('01') = 1 + 2 + 3
}

console.log(solution(123));
console.log(solution(987));
