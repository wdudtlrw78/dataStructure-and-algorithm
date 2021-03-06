/** @format */
const hash = (key, size) => {
    let hashedKey = 0;

    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }

    return hashedKey % size;
};

class HashTable {
    constructor() {
        this.size = 20;
        this.buckets = Array(this.size);
        console.log(this.buckets.length);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }

    insert(key, value) {
        const index = hash(key, this.size);
        this.buckets[index].set(key, value);
    }

    remove(key) {
        const index = hash(key, this.size);
        const deleted = this.buckets[index].get(key);
        this.buckets[index].delete(key);
        return deleted;
    }

    search(key) {
        const index = hash(key, this.size);
        return this.buckets[index].get(key);
    }
}

const hashTable = new HashTable();

hashTable.insert('mo', '3100001');
hashTable.insert('ba', '0100002');
hashTable.insert('re', '0100003');
hashTable.insert('qw', '0100004');
hashTable.insert('ew', '0100005');
console.log(hashTable.search('ba')); // 0100002
console.log(hashTable.search('mo')); // 0100001
console.log(hashTable.search('qw')); // 0100004
console.log(hashTable.search('ew')); // 0100005
hashTable.remove('re');
console.log(hashTable.search('re')); // undefined
