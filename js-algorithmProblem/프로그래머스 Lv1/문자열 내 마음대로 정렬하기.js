function solution(strings, n) {
  return strings.sort((a, b) =>
    // a.localeCompare(b)  a 보다 b 값이 크면 - 1 작으면 1 같으면 0 반환 ( 오름차순 )
    // sort이므로 -1 부터 오름차순
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
