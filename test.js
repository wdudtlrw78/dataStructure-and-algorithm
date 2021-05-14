function solution(s) {
  var answer = '';
  const regexp = /^\-[\d]{1,5}$|^\+?[\d]{1,5}$/gm;

  if (regexp.test(s)) return (answer = parseInt(s));
}

console.log(solution('+1234'));
console.log(solution('-1234'));
