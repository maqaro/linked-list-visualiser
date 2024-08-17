class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    clear() {
        this.head = null;
        this.size = 0; 
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }

    size() {
        return this.size; 
    }

    push(value) {
        const newNode = new ListNode(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        const newNode = new ListNode(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            newNode.next = current;
            previous.next = newNode;
        }

        this.size++;
    }

    search(value) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.data === value) { 
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    }

    pop() {
        if (this.size === 0) {
            throw new Error("List is empty");
        }

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }

        if (previous === null) {
            this.head = null;
        } else {
            previous.next = null;
        }

        this.size--;
        return current.data;
    }

    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let current = this.head;
        let previous = null;

        if (index === 0) {
            this.head = current.next;
        } else {
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            previous.next = current.next;
        }

        this.size--;
        return current.data; 
    }
}

export default LinkedList;