// 나의 코드

function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}

// best 코드

function solution(a, b) {
  return ((Math.abs(b - a) + 1) * (a + b)) / 2;
}

console.log(solution(5, 3));
console.log(solution(3, 3));
console.log(solution(5, 3));
