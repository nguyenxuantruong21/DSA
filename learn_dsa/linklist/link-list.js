const LinkedListNode = require("./link-list-node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) return this.prepend(value);
    if (index === this.size) return this.append(value);
    const newNode = new LinkedListNode(value);
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
  }

  removeHead() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return removed.value;
  }

  removeTail() {
    if (!this.head) return null;
    if (!this.head.next) {
      const removed = this.head;
      this.head = this.tail = null;
      this.size = 0;
      return removed.value;
    }
    let prev = this.head;
    while (prev.next && prev.next !== this.tail) {
      prev = prev.next;
    }
    const removed = this.tail;
    prev.next = null;
    this.tail = prev;
    this.size--;
    return removed.value;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) return this.removeHead();
    if (index === this.size - 1) return this.removeTail();

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    const removed = prev.next;
    prev.next = removed.next;
    this.size--;
    return removed.value;
  }

  find(value) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) return { node: curr, index };
      curr = curr.next;
      index++;
    }
    return null;
  }

  get(index) {
    if (index < 0 || index >= this.size) return null;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.value;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    this.tail = curr;
    while (curr) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    this.head = prev;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = LinkedList;
