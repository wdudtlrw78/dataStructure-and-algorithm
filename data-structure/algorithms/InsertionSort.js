"use stirct";

function insertionSort(array) {
  let i = 1,
    j,
    temp;
  for (i; i < array.length; i++) {
    temp = array[i]; // 새로운 숫자 선택
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      // 선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정, 선택한 숫자가 정렬된 숫자보다 작으면
      array[j + 1] = array[j]; // 한 칸씩 뒤로 밀어낸다 (true일 때까지 반복 false면 종료)
    }
    array[j + 1] = temp; // i 가 J 보다 클 경우 변화 없음
  }
  return array;
}

console.log(insertionSort([3, 8, 5, 1]));
