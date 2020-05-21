// 冒泡排序
// https://blog.csdn.net/lu_1079776757/article/details/80459370

let arr = [10, 14, 5, 6, 20, 8];

// 依次比较
function bubbleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    // 算法优化i < arr.length - 1 => i < arr.length - 1 - j
    for (let i = 0; i < arr.length - j; i++) {
      // 如果前一个数比后一个数大,交换两个数的位置
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  console.log(arr);
}

bubbleSort(arr);
