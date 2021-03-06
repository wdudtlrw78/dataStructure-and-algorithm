class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let node = new Node(data);
        let current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            let node = new Node(data);
            let curr;
            let prev;

            curr = this.head;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    remove(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            let curr;
            let prev;
            let it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.data;
        }
    }

    indexOf(data) {
        var count = 0;
        var current = this.head;

        while (current !== null) {
            if (current.data === data)
                return count;
            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    length() {
        console.log(this.size);
    }

    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

const ll = new LinkedList();

console.log(ll.isEmpty()); // true
ll.add(10); // 10
ll.printList(); // 10
console.log(ll.length()); // 1
ll.add(20);
ll.add(30);
ll.add(40); 
ll.add(50); 
ll.printList(); // 10 20 30 40 50
console.log(ll.indexOf(40)); // 3
ll.insertAt(60, 2); 
ll.printList(); // 10 20 60 30 40 50
console.log(ll.isEmpty()); // false
console.log(ll.remove(3)); 
ll.printList(); // 10 20 60 40 50