function solution(seoul) {
  var answer = '';
  const position = seoul.indexOf('Kim');
  answer = `김서방은 ${position}에 있다`;
  return answer;
}

console.log(solution(['Jane', 'Kim']));
