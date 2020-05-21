// 哈希函数

function hashFun(str, size) {
  let hashCode = 0;
  for (let i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i);
  }
  let index = hashCode % size;
  return index;
}

console.log(hashFun('abc', 7));
console.log(hashFun('cba', 7));
console.log(hashFun('nba', 7));
