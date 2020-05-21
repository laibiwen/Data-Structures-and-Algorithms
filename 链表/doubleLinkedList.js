// 双向链表

function DoubleLinkedList() {
  // 属性
  this.head = null;
  this.tail = null;
  this.length = 0;

  // 内部类
  function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  // 1.append
  DoubleLinkedList.prototype.append = function (data) {
    let newNode = new Node(data);
    //链表为空时,插入在第一个
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  // 2.toString
  DoubleLinkedList.prototype.toString = function () {
    return this.backwardString();
  };
  // 2.1.forwardString
  DoubleLinkedList.prototype.forwardString = function () {
    let current = this.tail;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.prev;
    }
    return result;
  };
  // 2.1.backwardString
  DoubleLinkedList.prototype.backwardString = function () {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }
    return result;
  };

  // 3.insert
  DoubleLinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) {
      return false;
    }
    let newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 在头部插入
      if (position === 0) {
        let current = this.head;
        current.prev = newNode;
        newNode.next = current;
        this.head = newNode;
      } else if (position === this.length) {
        // 在末尾插入
        newNode.prve = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let index = 0;
        let current = this.head;
        while (index < position) {
          current = current.next;
          index++;
        }
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }
    this.length++;
    return true;
  };

  // 4.get
  DoubleLinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    // 优化:从后往前查找 position > this.length/2
    return current.data;
  };
  // 5.indexOf
  DoubleLinkedList.prototype.indexOf = function (data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  };

  // 6.update
  DoubleLinkedList.prototype.update = function (position, data) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    let newNode = new Node(data);
    if (position === 0) {
      newNode.next = this.head.next;
      this.head.next.prev = newNode;
      this.head = newNode;
    } else if (position === this.length - 1) {
      newNode.prev = this.tail.prev;
      this.tail.prev.next = newNode;
      this.tail = newNode;
    } else {
      let index = 0;
      let current = this.head;
      while (index < position) {
        current = current.next;
        index++;
      }
      newNode.next = current.next;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.next.prev = newNode;
    }
  };

  // 7.removeAt

  DoubleLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let index = 0;
        while (index < position) {
          current = current.next;
          index++;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      this.length--;
      return current;
    }
  };
  // 8.remove
  DoubleLinkedList.prototype.remove = function (data) {
    let position = this.indexOf(data);
    return this.removeAt(position);
  };
}
