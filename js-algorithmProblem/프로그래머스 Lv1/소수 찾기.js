function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }

  s.add(2);
  s.delete(1);
  console.log(s);

  // 소수 판별

  // - 1과 2는 예외
  // - 2를 제외한 모든 짝수는 소수가 아니다.
  // - 숫자 3 제외한 나머지 3의 배수는 소수가 아니다.

  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }

  return s.size;
}

console.log(solution(10));
console.log(solution(5));
