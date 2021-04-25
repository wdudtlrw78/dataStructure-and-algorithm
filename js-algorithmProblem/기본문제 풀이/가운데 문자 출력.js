'use strict';

// first solution
function solution(str) {
  let answer;
  const middle = Math.floor(str.length / 2);

  // substring : start 부터 end 전 까지 추출
  if (str.length % 2 === 1) answer = str.substring(middle, middle + 1);
  else answer = str.substring(middle - 1, middle + 1);

  return answer;
}

// second solution
function solution(str) {
  let answer;
  const middle = Math.floor(str.length / 2);

  // str : start 부터 length 만큼 추출
  if (str.length % 2 === 1) answer = str.substr(middle, 1);
  else answer = str.substr(middle - 1, 2);

  return answer;
}

console.log(solution('study'));
console.log(solution('good'));
