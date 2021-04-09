const number = Array(50)
  .fill(0)
  .map((v, i) => i + 1);
function sq(number, search) {
  for (i = 0; i <= number.length; i++) {
    if (number[i] === search) return i;
  }
  return -1;
}

console.log(sq(number, 11));
