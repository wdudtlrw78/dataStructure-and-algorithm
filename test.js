function solution(n) {
  var answer = 0;
  for (let i = 2; i <= parseInt(n); i++) {
    if (n % i !== 0) answer++;
    console.log(n % i !== 0);
  }
  return answer;
}

console.log(solution(10));
console.log(solution(5));
