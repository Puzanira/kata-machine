type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) { // empty queue
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        const head = this.head;
        this.head = this.head?.next;

        // free, don't have to do that
        if (head?.next) head.next = undefined;

        if (this.length === 1) this.tail = undefined;
        this.length = Math.max(this.length - 1, 0);

        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}