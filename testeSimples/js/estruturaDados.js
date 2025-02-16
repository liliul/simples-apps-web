'use strict'

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        return this.items;
    }
}

const pilha = new Stack()

pilha.push(5)
pilha.push(10)

console.log(pilha.print())
console.log(pilha.pop())
console.log(pilha.print())
