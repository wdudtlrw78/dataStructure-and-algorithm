'use strict';

// 1. 동전 문제

// 사용 가능한 동전을 담을 배열
// const coins = [1, 50, 100, 500];

// function useMinCoins(cost, coins) {
//   // 사용된 동전의 총 개수
//   let totalUseCounts = 0;

//   // 가장 금액이 큰 동전부터 사용하기 위해 내림 차순 정렬
//   coins.sort((a, b) => b - a);

//   // 지불해야 할 금액으로 모두 지불할 때까지 반복
//   for (let coin of coins) {
//     if (cost >= 0) {
//       // 지불 금액을 현재 동전값으로 나눠 사용된 개수를 구한다. 소수점은 버린다.
//       // 4720 / 500 = 9
//       // 220 / 100 = 2
//       // 20 / 1 = 20
//       const useCounts = Math.floor(cost / coin);

//       // 총 동전 사용 회수에 해당 동전 사용 회수 추가.
//       // totalUseCounts = 9
//       // totalUseCounts = 2
//       // totalUseCounts = 11
//       totalUseCounts += useCounts;

//       // 지불할 금액에서 해당 동전 * 사용회수 값 만큼 뺀다.
//       // 4720 - 500 * 9 = 220
//       // 220 - 100 * 2 = 20
//       // 20 - 1 * 20 = 0
//       cost -= coin * useCounts;
//     } else {
//       break;
//     }
//   }

//   // 9 + 2 + 11 = 31
//   return totalUseCounts;
// }

// console.log(useMinCoins(4720, coins));

// 2. 부분 배낭 문제

const items = [
  [10, 10],
  [15, 12],
  [20, 10],
  [25, 8],
  [30, 5],
];

function getMaxValue(items, capacity) {
  // 가방의 총 가치
  let totalValue = 0;

  items.sort((a, b) => {
    // 나눠서 담을 수 있으므로 무게 당 가치를 구한다.
    // 10 / 10 = 1
    // 12 / 15 = 0.8
    // 10 / 20 = 0.5
    // 8 / 25 = 0.32
    // 5 / 30 = 0.166...
    const valuePerWeightOfA = a[1] / a[0];
    const valuePerWeightOfB = b[1] / b[0];

    // 값이 가장 큰 물건부터 집어넣기 위해 내림차순 정렬.
    // [10, 10] [15, 12] [20 10] [25 8] [30 5]
    valuePerWeightOfB - valuePerWeightOfA;
  });

  for (let item of items) {
    // 배낭이 해당 물건을 온전히 담을 수 있을 때
    // 30 - 10
    // 20 - 15
    // 5 - 20 = -15
    if (capacity - item[0] >= 0) {
      // 최대 하중에서 물건의 무게만큼 뺀다.
      // 30 - 10 = 20
      // 20 - 15 = 5
      capacity -= item[0];

      // 배낭의 가치에 물건의 가치만큼 더한다.
      // 10
      // 12
      totalValue += item[1];
    } else {
      // 남은 하중에 item의 일부가 얼마나 들어가는지 계산
      // 5 / 20 = 0.25
      const fraction = capacity / item[0];

      // 해당 물건의 일부분 * 가치
      // 0.25 * 10 = 2.5
      totalValue += fraction * item[1];

      // 해당 물건을 넣으면 최대하중이 가득 찬다는 뜻이므로 반복 종료
      break;
    }
  }

  return totalValue;
  // 10 12 2.5
}

console.log(getMaxValue(items, 30)); // 24.5
