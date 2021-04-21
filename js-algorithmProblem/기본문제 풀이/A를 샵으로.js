const str = 'BANANA';
function solution(str) {
  let answer = '';
  for (let x of str) {
    if (x === 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

console.log(solution(str));
