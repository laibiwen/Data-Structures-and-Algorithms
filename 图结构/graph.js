// 队列
function Queue() {
  this.item = [];
  this.length = 0;
  // 1.enqueue
  Queue.prototype.enqueue = function (element) {
    this.item.push(element);
    this.length++;
  };

  // dequeue
  Queue.prototype.dequeue = function () {
    return this.item.shift();
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

  // isEmpty
  Queue.prototype.isEmpty = function () {
    return this.item.length === 0;
  };
}
// 图结构

function Graph() {
  this.vertexes = []; //顶点
  this.edges = new Map();

  Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v);
    this.edges.set(v, []);
  };

  Graph.prototype.adEdge = function (v1, v2) {
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1);
  };

  Graph.prototype.toString = function () {
    let str = '';
    for (let i = 0; i < this.vertexes.length; i++) {
      str += this.vertexes[i] + '=>';
      let vEdges = this.edges.get(this.vertexes[i]);
      for (let j = 0; j < vEdges.length; j++) {
        str += vEdges[j] + ' ';
      }
      str += '\n';
    }
    return str;
  };

  // 初始化颜色
  Graph.prototype.initializeColor = function () {
    let colors = [];
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = 'white';
    }
    return colors;
  };
  // 广度优先搜索(BFS)
  Graph.prototype.bfs = function (initV, handler) {
    let colors = this.initializeColor();
    let queue = new Queue();
    queue.enqueue(initV);
    while (!queue.isEmpty()) {
      let v = queue.dequeue();
      let vList = this.edges.get(v);
      colors[v] = 'gray';
      for (let i = 0; i < vList.length; i++) {
        let e = vList[i];
        if (colors[e] === 'white') {
          colors[e] = 'gray';
          queue.enqueue(e);
        }
      }
      handler(v);
      colors[v] = 'black';
    }
  };
  // 深度优先搜索(DFS)
  Graph.prototype.dfs = function (initV, handler) {
    let colors = this.initializeColor();
    this.dfsVisit(initV, colors, handler);
  };
  Graph.prototype.dfsVisit = function (v, colors, handler) {
    colors[v] = 'gray';
    handler(v);
    let vList = this.edges.get(v);
    for (let i = 0; i < vList.length; i++) {
      let e = vList[i];
      if (colors[e] === 'white') {
        this.dfsVisit(e, colors, handler);
      }
    }
    colors[v] = 'black';
  };
}

let g = new Graph();
let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
arr.map((item) => {
  g.addVertex(item);
});
g.adEdge('A', 'B');
g.adEdge('A', 'C');
g.adEdge('A', 'D');
g.adEdge('C', 'D');
g.adEdge('C', 'G');
g.adEdge('D', 'G');
g.adEdge('D', 'H');
g.adEdge('B', 'E');
g.adEdge('B', 'F');
g.adEdge('E', 'I');

let result = '';
g.dfs(g.vertexes[0], function (v) {
  result += v + ' ';
});
console.log(result);
