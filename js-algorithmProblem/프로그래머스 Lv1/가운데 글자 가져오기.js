// 내 코드
function solution(s) {
  var answer = '';
  let n = s.length;
  for (let i = 0; i < n; i++) {
    if (n % 2 === 0) {
      answer = s.substr(n / 2 - 1, 2);
    } else {
      answer = s.substr(Math.floor(n / 2), 1);
    }
  }
  return answer;
}

// best 코드
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

console.log(solution('abcde'));
console.log(solution('qwer'));
