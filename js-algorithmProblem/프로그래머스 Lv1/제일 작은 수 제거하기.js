// 나의 코드
function solution(arr) {
  const min = Math.min(...arr); // 1
  const index = arr.indexOf(min);
  arr.splice(index, 1);

  if (arr.length === 0) return [-1];
  return arr;
}

// 다른 유저의 코드
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
