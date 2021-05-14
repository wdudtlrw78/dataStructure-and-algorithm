function solution(s) {
  var answer = '';
  const regexp = /^\-[\d]{1,5}$|^\+?[\d]{1,5}$/gm;

  if (regexp.test(s)) return (answer = parseInt(s));
}

console.log(solution('1234'));
console.log(solution('-1234'));

function solution(s) {
  return s / 1; // 자바스크립트에서는 사칙연산이 이루어지면 자동으로 파싱이 되나부다...
}

console.log(solution('1234'));
console.log(solution('-1234'));
