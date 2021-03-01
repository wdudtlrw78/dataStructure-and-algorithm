const LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }

    function Node(data) {
        this.data = data;
        this.next = null;
    }
    LinkedList.prototype.add = function (value) {
        const node = new Node(value);
        let current = this.head;
        if (!current) { // 현재 아무 노드도 없으면
            this.head = node; // head에 새로운 노드 추가
            this.length++;
            return node;
        } else { // 이미 노드가 있으면
            while (current.next) { // 마지막 노드 접근
                current = current.next;
            }
        }
        current.next = node; // 마지막 위치에 노드 추가
        this.length++;
        return node;
    }

    LinkedList.prototype.search = function (position) {
        let current = this.head;
        let count = 0;
        while (count < position) { // position 위치만큼 이동
            current = current.next;
            count++;
        }
        return current.data;
    }
    LinkedList.prototype.remove = function (position) {
        let current = this.head;
        let before;
        let remove;
        let count = 0;
        if (position == 0) { // 맨 처음 노드를 삭제하면
            remove = this.head;
            this.head = this.head.next; // head를 두 번째 노드로 교체
            this.length--;
            return remove;
        } else { // 그 외의 다른 노드를 삭제하면
            while (count < position) {
                before = current;
                count++;
                current = current.next; 
            }
            remove = current;
            before.next = remove.next;
            // remove 메모리 정리
            this.length--;
            return remove;
        }
    }
    return LinkedList;
})();

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.length); // 3
console.log(list.search(0)); // 1
console.log(list.search(2))// 3
list.remove(1);
console.log(list.length) // 2