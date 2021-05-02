// 내 코드
function solution(a, b) {
  var answer = '';
  const date = new Date(2016, a - 1, b);
  const week = date.toString();
  return (answer = week.slice(0, 3).toUpperCase());
}

// best 코드
function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

console.log(solution(5, 24));
