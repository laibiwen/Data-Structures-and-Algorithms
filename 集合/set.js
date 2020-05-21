// 封装集合

function Set() {
  this.items = {};

  // 1.add
  Set.prototype.add = function (value) {
    // 判断集合中是否存在该元素
    if (this.has(value)) return false;
    this.items[value] = value;
    return true;
  };

  // 2.has
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  };

  // 3.remove
  Set.prototype.remove = function (value) {
    // 判断该集合是否存在该元素
    if (!this.has(value)) return false;
    delete this.items[value];
    return true;
  };

  // 4.clear
  Set.prototype.clear = function () {
    this.items = {};
    return true;
  };

  // 5.size
  Set.prototype.size = function () {
    return Object.keys(this.item).length;
  };

  // 6.获取所有的值
  Set.prototype.values = function () {
    return Object.keys(this.items);
  };

  // 集合间的操作
  // 7.并集
  Set.prototype.union = function (otherSet) {
    // 合并后的新集合
    let union = new Set();
    // A集合
    let values = this.values();
    // 将A集合加入新集合
    for (let i = 0; i < values.length; i++) {
      union.add(values[i]);
    }
    values = otherSet.values();
    // 将B集合加入新集合
    for (let i = 0; i < values.length; i++) {
      union.add(values[i]);
    }
    return union.items;
  };

  // 交集
  Set.prototype.intersection = function (otherSet) {
    // 合并后的新集合
    let intersection = new Set();
    // A集合
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersection.add(values[i]);
      }
    }
    return intersection;
  };

  // 差集
  Set.prototype.Difference = function (otherSet) {
    // 合并后的新集合
    let difference = new Set();
    // A集合
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        difference.add(values[i]);
      }
    }
    return difference;
  };
  // 子集
  Set.prototype.subSet = function (otherSet) {
    // A集合
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }
    return true;
  };
}

let set = new Set();
set.add('芒果');
set.add('香蕉');
set.add('葡萄');
// console.log(set.values());
// set.remove('芒果');

console.log(set.values());

let set2 = new Set();
set2.add('芒果');
set2.add('香蕉');
console.log(set2);

console.log(set.subSet(set2));
