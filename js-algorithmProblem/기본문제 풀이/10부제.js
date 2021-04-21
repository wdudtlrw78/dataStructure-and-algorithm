'use strict';

const carNumbers = [25, 23, 11, 47, 53, 17, 33];

function solution(day, carNumbers) {
  let violationCar = 0;
  for (let violation of carNumbers) {
    // 어떠한 숫자든지 10으로 나누면 나머지는 일의 자리 숫자가 된다.
    // ex) 23 % 10 === 3
    if (violation % 10 === day) violationCar++;
  }
  return violationCar;
}

console.log(solution(3, carNumbers));
