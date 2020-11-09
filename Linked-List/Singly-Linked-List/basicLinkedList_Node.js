class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // Constructor
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Push
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
    }
    else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Pop
  pop() {

    let currentNode = head;
    let secondToLastNode = currentNode;
    if(!this.head) return undefined

    while(currentNode.next !== null) {
      secondToLastNode = currentNode;
      currentNode = currentNode.next
    }
    this.tail = secondToLastNode;
    this.tail.next = null;
    this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
}




