'use strict';

// 우선순위 큐 활용
class priorityQueue {
  constructor() {
    this.list = new Array();
  }

  enqueue(data) {
    if (this.list.length === 0) {
      this.list.push(data);
      return;
    }

    for (let index = 0; index < this.list.length; index++) {
      if (data[0] < this.list[index][0]) {
        this.list.splice(index, 0, data);
        return;
      }
    }

    this.list.push(data);
  }

  dequeue(data) {
    return this.list.shift();
  }
}

// 방향 그래프
const myGraph = {
  A: { B: 8, C: 1, D: 2 },
  B: {},
  C: { B: 5, D: 2 },
  D: { E: 3, F: 5 },
  E: { F: 1 },
  F: { A: 5 },
};

// 탐색할 그래프와 시작 정접을 인수로 전달 받는다.
function dijkstra(graph, start) {
  // 시작 정접에서 각 정접까지의 거리를 저장할 오브젝트를 생성하고, 무한대로 각각 초기화한다.
  const distances = new Object();
  for (const key in graph) {
    distances[key] = Infinity;
  }
  // 그래프의 시작 정접의 거리는 0으로 초기화
  distances[start] = 0;

  // 모든 정점이 저장될 큐를 생성한다.
  const queue = new priorityQueue();
  // 그래프의 시작 정점과 시작 정점의 거리(0)을 최소힙에 넣어줌
  queue.enqueue([distances[start], start]);

  while (queue.list.length !== 0) {
    // 큐에서 정점을 하나씩 꺼내 인접한 정점들의 가중치를 모두 확인하여 업데이트
    const [currentDistance, currentNode] = queue.dequeue();

    // 더 짧은 경로가 있다면 무시한다.
    if (distances[currentNode] < currentDistance) {
      continue;
    }

    for (const key in graph[currentNode]) {
      const adjacent = key;
      const weight = graph[currentNode][key];
      const distance = currentDistance + weight;
      console.log(adjacent, weight, distance);

      // 만약 시작 정점에서 인접정점으로 바로 가는 것보다 현재 정접을 통해 가는 것이 더 가까울경우
      if (distance < distances[adjacent]) {
        // 거리를 업데이트
        distances[adjacent] = distance;
        queue.enqueue([distance, adjacent]);
      }
    }
  }

  return distances;
}

console.log(dijkstra(myGraph, 'A')); // { A: 0, B: 6, C: 1, D: 2, E: 5, F: 6 }
