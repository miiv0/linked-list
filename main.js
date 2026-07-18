class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    insertLast(data) {
        let node = new Node(data);
        let current;
    }

    printList(data) {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.insertFirst(1)
list.insertFirst(2)
list.insertFirst(3)
list.insertFirst(4)
list.insertFirst(5)


console.log(list)
list.printList()