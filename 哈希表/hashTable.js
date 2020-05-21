// 哈希表

function HashTable() {
  this.storage = [];
  this.count = 0; //存放的元素
  this.limit = 7; //当前数组总长度

  // 哈希函数
  HashTable.prototype.hashFun = function (str, size) {
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    let index = hashCode % size;
    return index;
  };

  //  插入&&修改
  HashTable.prototype.put = function (key, value) {
    let index = this.hashFun(key, this.limit);
    let bucket = this.storage[index];
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.count++;
    // 是否需要扩容

    if (this.count > this.limit * 0.75) {
      let newSize = this.limit * 2;
      let newLimit = this.getPrime(newSize);
      this.resiz(newLimit);
    }
  };

  // 获取
  HashTable.prototype.get = function (key) {
    let index = this.hashFun(key, this.limit);
    let bucket = this.storage[index];
    if (bucket == null) return null;
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) return tuple[1];
    }
    return nill;
  };

  // 删除
  HashTable.prototype.delete = function (key) {
    let index = this.hashFun(key, this.limit);
    let bucket = this.storage[index];
    if (bucket === null) return null;
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      // 删除使用splice(index,length)
      if (tuple[0] === key) bucket.splice(i, 1);
      this.count--;
      if (this.limit > 7 && this.count < this.limit * 0.25) {
        let newSize = this.limit / 2;
        let newLimit = this.getPrime(newSize);
        this.resiz(newLimit);
      }
      return tuple[1];
    }
    return null;
  };

  // 哈希表是否为空
  HashTable.prototype.isEmpty = function (key) {
    return this.count === 0;
  };

  // 哈希表元素个数
  HashTable.prototype.size = function (key) {
    return this.count;
  };

  // 扩容
  HashTable.prototype.resize = function (newLimit) {
    // 保存旧的数组内容
    let oldStorage = this.storage;
    // 重置所有属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;
    // 遍历oldStorage
    for (let i = 0; i < array.length; i++) {
      let bucket = oldStorage[i];
      if (bucket == null) continue;
      for (let j = 0; j < array.length; j++) {
        let tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  };

  // 判断是否为质数
  HashTable.prototype.isPrime = function (num) {
    let temp = parseInt(Math.sqrt(num));
    for (let i = 0; i <= temp; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 获取质数
  HashTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  };
}
