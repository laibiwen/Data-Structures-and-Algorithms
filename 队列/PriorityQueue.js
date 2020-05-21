// 优先队列

function PriorityQueue() {
  this.items = [];
  this.length = 0;

  function Node(data, priority) {
    this.data = data;
    this.priority = priority;
  }

  // 1.append
  PriorityQueue.prototype.append = function (data, priority) {
    // 空数组添加元素
    let newNode = new Node(data, priority);
    if (this.length === 0) {
      this.items.push(newNode);
    } else {
      let add = false; //判断时候插入
      for (let i = 0; i < this.length; i++) {
        if (newNode.priority < this.items[i]) {
          this.items.splice(i, 0, newNode);
          add = true;
          break;
        }
      }
      // 当前元素优先级最低,在末尾插入
      if (!add) {
        this.items.push(newNode);
      }
    }
  };
}
