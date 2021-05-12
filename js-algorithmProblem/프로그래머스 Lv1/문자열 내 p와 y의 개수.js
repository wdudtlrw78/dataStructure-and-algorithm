// 나의 코드
function solution(s) {
  var answer = true;
  let yCount = 0;
  let pCount = 0;

  for (let x of s) {
    const s = x.toUpperCase();
    if (s === 'Y') {
      yCount++;
    } else if (s === 'P') {
      pCount++;
    }
  }

  if (yCount === pCount) answer;
  else answer = false;

  return answer;
}

// best 코드

function solution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
