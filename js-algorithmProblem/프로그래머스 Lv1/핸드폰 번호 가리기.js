// 나의 풀이

function solution(phone_number) {
  let star = '';
  let changeNumber = phone_number.length - 4;
  let number = phone_number.substring(changeNumber, phone_number.length);
  for (let i = 0; i < changeNumber; i++) {
    star += '*';
  }
  return star + number;
}

// 다른 유저 풀이

function solution(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
