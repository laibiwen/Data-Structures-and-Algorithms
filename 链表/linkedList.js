// 单向链表
/**
 * 考虑第一个位置删除的情况
 */
function LinkedList() {
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  this.head = null;
  this.length = 0;

  // 1.添加元素
  LinkedList.prototype.append = function (data) {
    // 创建元素
    let newNode = new Node(data);
    // 添加元素
    if (this.length == 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  };

  // 2.toString
  LinkedList.prototype.toString = function () {
    let currentNode = this.head;
    let list = '';
    while (currentNode) {
      list += currentNode.data + ' ';
      currentNode = currentNode.next;
    }
    return list;
  };

  // 3.insert
  LinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) return false;
    let newNode = new Node(data);
    // 在开头位置插入
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length++;
    return true;
  };

  // 4.get
  LinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  };

  // 5.indexOf
  LinkedList.prototype.indexOf = function (data) {
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
  // 采用注释的方法,需要判断是否是第一个元素
  LinkedList.prototype.update = function (position, data) {
    if (position < 0 || position >= this.length) return false;
    let newNode = new Node(data);
    let current = this.head;
    // let previous = null;
    let index = 0;
    while (index++ < position) {
      // previous = current;
      current = current.next;
    }
    current.data = newNode.data;
    return true;
    // previous.next = newNode;
    // newNode.next = current.next;
  };

  // 7.removeAt
  // 采用注释的方法,需要判断是否是第一个元素
  LinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    if (position === 0) {
      this.head = this.head.next;
      this.length--;
      return current.data;
    }
    let previous = null;
    let index = 0;
    while (index++ < position) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.length--;
    return current.data;
  };

  // 8.remove
  LinkedList.prototype.remove = function (data) {
    // 调用 removeAt  indexOf
    let position = this.indexOf(data);
    return this.removeAt(position);
  };
}
