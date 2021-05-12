// 나의 코드

function solution(s) {
  return s
    .split('')
    .sort((a, b) => {
      const A = a.charCodeAt();
      const B = b.charCodeAt();
      return B - A;
    })
    .join('');
}

console.log(solution('Zbcdefg'));

// best 코드

function solution(s) {
  return s.split('').sort().reverse().join('');
}

console.log(solution('Zbcdefg'));
