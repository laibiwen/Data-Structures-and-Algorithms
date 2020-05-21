// 队列

function Queue() {
  this.item = [];
  this.length = 0;
  // 1.append
  Queue.prototype.append = function (data) {
    this.item.push(data);
    this.length++;
  };
  // 2.update
  Queue.prototype.update = function (position, data) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    return this.item.splice(position, 1, data);
  };
  // 3.toString
  Queue.prototype.toString = function () {
    let index = 0;
    let result = '';
    while (index < this.item.length) {
      result += this.item[index] + ' ';
      index++;
    }
    return result;
  };
  // 4.indexOf
  Queue.prototype.indexOf = function (data) {
    let index = 0;
    while (index < this.length) {
      if (this.item[index] === data) return index;
      index++;
    }
    return -1;
  };
}

let queue = new Queue();
queue.append('apple');
queue.append('orange');
queue.append('葡萄');
console.log(queue.toString());
queue.update(2, '香蕉');
console.log(queue.toString());
console.log(queue.indexOf('orange0'));
