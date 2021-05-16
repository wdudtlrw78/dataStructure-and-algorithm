function solution(n, m) {
  let answer = '';
  for (let i = 0; i < m; i++) {
    answer += '*'.repeat(n) + '\n';
  }
  return answer;
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  let star = '';
  const a = Number(n[0]);
  const b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
});

console.log(solution(5, 3));
console.log(solution(2, 2));
