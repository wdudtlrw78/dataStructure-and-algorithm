// 1

function solution(s) {
  const text = s.split('');
  let index = 0;
  console.log(text);
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') index = 0;
    else if (index % 2 === 0) {
      text[i] = text[i].toUpperCase();
      index++;
    } else {
      text[i] = text[i].toLowerCase();
      index++;
    }
  }
  return text.join('');
}

// 2

function func(a) {
  return a[0].toUpperCase() + a[1].toLowerCase();
}

function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, func);
}

// 3

function solution(s) {
  return s
    .split(' ')
    .map((a) =>
      a
        .split('')
        .map((b, i) => (i % 2 === 0 ? b.toUpperCase() : b.toLowerCase()))
        .join('')
    )
    .join(' ');
}

console.log(solution('try hello world '));
