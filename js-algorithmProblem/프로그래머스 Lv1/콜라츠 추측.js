// 나의 풀이
function solution(num) {
  var answer = 0;
  if (num === 1) return 0;
  while (answer < 500) {
    if (num === 1) return answer;
    if (num % 2 === 0) {
      num = num / 2;
      answer++;
    } else {
      num = num * 3 + 1;
      answer++;
    }
  }
  return -1;
}

// 다른 유저 풀이
function solution(num, count = 0) {
  return num == 1
    ? count >= 500
      ? -1
      : count
    : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

console.log(solution(1));
console.log(solution(6));
console.log(solution(16));
console.log(solution(939497));
