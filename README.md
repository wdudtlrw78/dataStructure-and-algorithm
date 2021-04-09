# 기본개념 정리

## 자료구조 이론

### <strong>배열 (array)</strong>

- 같은 종류의 데이터를 효율적으로 관리하기 위해 사용
- 같은 종류의 데이터를 순차적으로 저장

장점

- 빠른 접근 가능
  - 인덱스 번호로 접근
    단점
- 데이터 추가/삭제의 어려움
  - 미리 최대 길이를 지정해야 함

### <strong>큐 (queue)</strong>

- 가정 먼저 넣은 데이터를 가장 먼저 꺼낼 수 있는 구조
- FIFO (First-in, First-out)방식

<br>

### <strong>스택 (stack)</strong>

- 데이터를 제한적으로 접근할 수 있는 구조
  - 한쪽 끝에서만 자료를 넣거나 뺄 수 있는 구조
- 가장 나중에 쌓은 데이터를 가장 먼저 빼낼 수 있는 데이터 구조
  - LIFO(Last In, First Out) 또는 FILO(First in, Last Out) 방식
- 대표적인 스택의 활용
  - 컴퓨터 내부의 프로세스 구조의 함수 동작 방식
- 스택은 단순하고 빠른 성능을 위해 사용되므로, 보통 배열 구조를 활용해서 구현하는 것이 일반적이다.

장점

- 데이터 저장/읽기 속도가 빠르다

단점

- 데이터 최대 갯수를 미리 정해야 한다.
- 저장 공간의 낭비가 발생할 수 있다.
  - 미리 최대 갯수만큼 저장 공간을 확보해야 한다.

<br>

## 알고리즘 이론

<br>

### <strong>시간 복잡도(time complexity)</strong>

- [중요한 개념이므로 블로그 참고](https://blog.naver.com/wdudtlrw/222263409365)

<br>

### <strong>공간 복잡도 (space complexity)</strong>

- 프로그램을 실행 및 완료하는데 필요한 저장공간의 양을 뜻함
- 통상 시간 복잡도, 공간 복잡도 둘 다 만족시키기 어렵다
  - 시간과 공간은 반비례적 경향이 있다.
  - 최근 대용량 시스템 보편화되면서, 시간 복잡도가 우선

총 필요 저장 공간

- 고정 공간(알고리즘과 무관한 공간): 코드 저장 공간, 단순 변수 및 상수
- 가변 공간(알고리즘 실행과 관련있는 공간): 실행 중 동적으로 필요한 공간
- S(P) = c + Sp(n)
  - c: 고정공간
  - Sp(n): 가변 공간
- Big-O 표기법 생각해볼 때, 고정 공간은 상수이므로 즉 가변 공간에 좌우된다.

<br>

### <strong>버블 정렬 (bubble sort)</strong>

- 두 인접한 데이터를 비교해서, 앞에 있는 데이터가 뒤에 있는 데이터보다 크면, 자리를 바꾸는 정렬 알고리즘

시간 복잡도

- O(n^2)
- 완전 정렬시 O(n)

<br>

### <strong>선택 정렬 (selection sort)</strong>

- 다음과 같은 순서를 반복하며 정렬하는 알고리즘

1. 주어진 데이터 중, 최소값을 찾음
2. 해당 최솟값을 데이터 맨 앞에 위치한 값과 교체함
3. 맨 앞의 위치를 뺀 나머지 데이터를 동일한 방법으로 반복함

- 코드가 간단하다.
- 작은 수 (보통 30 이하)에서는 효과적이다.

풀이

[9, 3, 2, 1] 배열 가정

- 처음 한 번 실행하면 [1, 3, 2, 9]
- 두 번째 실행하면 [1, 2, 3, 9]
- 세 번째 실행하면, 변화 없음

시간 복잡도

- O(n^2)
- 실제로 상세하게 계산하면, n \* (n - 1) / 2

<br>

### <strong>삽입 정렬 (insertion soort)</strong>

- 두 번째 인덱스부터 시작
- 해당 인덱스(key 값) 앞에 있는 데이터(B)부터 비교해서 key 값이 더 작으면, B값을 뒤 인덱스로 복사
- key 값이 더 큰 데이터를 만날때까지 반복, 그리고 큰 데이터를 만난 위치 바로 뒤에 key 값을 이동

풀이

[3, 7, 1, 5, 2] 배열 가정

- 두 번째부터 시작. 숫자 7을 선택
- [3, <b>7</b>, 1, 5, 2]
- 앞의 3과 비교 3보다 크기 때문에 그 자리에 둔다. 다음 숫자 1 선택
- [3, 7, <b>1</b>, 5, 2]
- 1은 앞의 3, 7보다 작기 때문에 3, 7 앞에 넣어준다. 다음 숫자 5 선택
- [1, 3, 7, <b>5</b>, 2]
- 5는 3보다는 크고 3, 7 보다 작기 때문에 그 사이에 넣어준다. 다음숫자 2 선택
- [1, 3, 5, 7, <b>2</b>]
- 마지막으로 1과 3, 5, 7 사이에 2 넣고. 다음 숫자가 없으므로 종료
- [1, 2, 3, 5, 7] 정렬 완료

시간 복잡도

- O(n^2)
- 완전 정렬시 O(n)

<br>

### <strong>동적 계획법 (dynamic programming)과 분할 정복 (divide and conquer)</strong>

- 동적계획법 (DP 라고 많이 부름)
  - 입력의 크기가 작은 부분 문제들을 해결한 후, 해당 부분 문제의 해를 활용해서, 보다 큰 크기의 부분 문제를 해결, 최종적으로 전체 문제를 해결하는 알고리즘
  - 상향식 접근법 (Bottom-Top)으로 가장 최하위 해답을 구한 후, 저장하고, 해당 결과값을 이용해서 상위 문제를 풀어가는 방식
  - Memoization 기법을 사용함
    - Memoization 이란: 프로그램 실행 시 이전에 계산한 값을 저장하여, 다시 계산하지 않도록 하여 전체 실행 속도를 빠르게 하는 기술
  - 문제를 잘게 쪼갤 때, 부분 문제는 중복되어, 재활용됨
    - 예: 피보나치 수열
- 분할 정복
  - 문제를 나눌 수 없을 때까지 나누어서 각각을 풀면서 다시 합병하여 문제의 답을 얻는 알고리즘
  - 하양식 접근법 (Top-Bottom)으로 상위의 해답을 구하기 위해, 아래로 내려가면서 하위의 해답을 구하는 방식
    - 일반적으로 재귀함수로 구현
  - 문제를 잘게 쪼갤 때, 부분 문제는 서로 중복되지 않음
    - 예: 병합 정렬, 퀵 정렬 등

공톰점과 차이점

- 공통점
  - 문제를 잘게 쪼개서, 가장 작은 단위로 분할
- 차이점
  - 동적 계획법
    - 부분 문제는 중복되어, 상위 문제 해결 시 재활용됨
    - Memoization 기법 사용
  - 분할 정복
    - 부분 문제는 서로 중복되지 않음
    - Memoization 기법 사용 안함

<br>

### <strong>퀵 정렬 (quick sort)</strong>

- 정렬 알고리즘의 꽃
- 기준점(pivot)을 정해서, 기준좀보다 작은 데이터는 왼쪽, 큰 데이터는 오른쪽으로 모으는 함수를 작성함
- 각 왼쪽, 오른쪽은 재귀용법으로 사용해서 다시 동일 함수를 호출하여 위 작 작업을 반복함
- 같은 O(NlogN) 합병 정렬보다는 두 배 빠르다.

시간 복잡도

- O(NlogN)
- 최악의 경우 O(N^2)

<br>

### <strong>병합 정렬 (merge sort)</strong>

- 재귀용법을 활용한 정렬 알고리즘

1. 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
2. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
3. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

풀이

- 재귀와 분할 정복 사용 (재귀로 작은 문제로 쪼개서)

[4, 1, 6, 5, 2, 3, 7, 8] 배열 가정

- [4, 1, 6, 5] [2, 3, 7, 8] 다시 합병 정렬 실행
- [4, 1] [6, 5] [2, 3] [7, 8]
- [1, 4] [5, 6] [2, 3] [7, 8]
- [1, 4, 5, 6] [2, 3, 7, 8]
- [4, 5, 6] [2, 3, 7, 8] [결과배열: 1]
- [4, 5, 6] [3, 7, 8] [1, 2]
- [4, 5, 6] [7, 8] [1, 2, 3]
- [5, 6] [7, 8] [1, 2, 3, 4]
- [6] [7, 8] [1, 2, 3, 4, 5]
- [] [7, 8] [1, 2, 3, 4, 5, 6]
- [] [8] [1, 2, 3, 4, 5, 6, 7]
- [] [] [1, 2, 3, 4, 5, 6, 7, 8]

<br>

### <strong>이진 탐색 (binary search)</strong>

- 탐색할 자료를 둘로 나누어 해당 데이터가 있을만한 곳을 탐색하는 방법
- 데이터가 정렬 되어있어야 한다.
- Divide : 리스트를 두 개의 서브 리스트로 나눈다.

1. search > 중간값 이면, 뒷 부분의 서브리스트에서 검색할 숫자를 찾는다.
2. search < 중간값 이면, 앞 부분의 서브리스트에서 갬색할 숫자를 찾는다.

풀이

[1, 3, 5, 7, 13 , 27, 41, 64, 70, 75, 83, 92, 96, 99] 배열 가정

Search = 75[9]

- 9(search) > 6(중간값: 41), 뒷 부분의 서브리스트에서 검색할 숫자를 찾는다.
- [64, 70, 75, 83, 92, 96, 99] / steps = 1
- 9(search) <10(중간값: 83), 앞 부분의 서브리스트에서 검색할 숫자를 찾는다.
- [64, 70, 75] / steps = 2
- 9(search) > 8(중간값: 70), 뒷 부분의 서브리스트에서 검색할 숫자를 찾는다.
- [75] / steps = 3

시간 복잡도

- O(log n)
