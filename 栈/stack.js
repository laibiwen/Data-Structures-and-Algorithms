// 栈: 先进后出

class Stack {
  constructor() {
    this.item = [];
  }
}

Stack.prototype.push = function (element) {
  this.item.push(element);
};
Stack.prototype.pop = function (element) {
  return this.item.pop();
};

let stack = new Stack();
stack.push(10);
stack.push(9);
stack.push(8);
alert(stack.pop());
console.log(stack);
