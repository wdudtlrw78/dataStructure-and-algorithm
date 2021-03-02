class LinkedListNode{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    } 
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    addFront(value){
        //if list is empty
        if(this.isEmpty()){
            this.head = new LinkedListNode(value)
            this.tail = this.head
        }
        else{
            let tmp = new LinkedListNode(value)
            tmp.next = this.head
            this.head.prev = tmp
            this.head = tmp
        }
        this.size++
    }

    addBack(value){
        //if list is empty
        if(this.isEmpty()){
            this.tail = new LinkedListNode(value)
            this.head = this.tail
        }
        else{
            let tmp = new LinkedListNode(value)
            tmp.prev = this.tail
            this.tail.next = tmp
            this.tail = tmp
        }
        this.size++
    }

    removeHead(){
        if(this.isEmpty()) return null

        let data = this.head.data

        //if head(=tail) is target
        if(this.head == this.tail){
            this.head = null
            this.tail = null
        }
        else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
        return data
    }

    removeTail(){
        if(this.isEmpty()) return null

        let data = this.tail.data

        //if head(=tail) is target
        if(this.head == this.tail){
            this.head = null
            this.tail = null
        }
        else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
        return data
    }
    
    removeByValue(value){
        let current = this.head //Using tail instead of head also works.

        //if head is target
        if(current.data == value){
            this.head = current.next
            this.size--
        }
        else{
            let prev = current
            while(current.next){
                if(current.data == value){
                    prev.next = current.next
                    current = current.next
                    break
                }
                prev = current
                current = current.next
            }

            if(current.data == value)
                prev.next = null
            this.size--
        }
    }

    findStartingHead(value){
        let current = this.head
        while(current.next){
            if(current.data == value) return true
            current = current.next
        }
        return false
    }

    findStartingTail(value){
        let current = this.tail
        while(current.prev){
            if(current.data == value) return true
            current = current.prev
        }
        return false
    }
    print(){
        let result = ""
        let current = this.head
        while(current.next){
            result += `${current.data} -> `
            current = current.next
        }
        result += current.data
        console.log(result)
    }
}

const ll = new DoublyLinkedList;
ll.addFront(1); // 1 ->
ll.addFront(2); // 2 -> 1
ll.addFront(3); // 3 -> 2 -> 1
ll.addFront(4); // 4 -> 3 -> 2 -> 1
ll.addBack(5); // 4 -> 3 -> 2 -> 1 -> 5
ll.removeHead(); // 3 -> 2 -> 1 -> 5
ll.removeTail(); // 3 -> 2-> 1
ll.removeByValue(2); // 3 -> 1