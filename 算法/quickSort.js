// 快速排序
// https://baike.baidu.com/item/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/369842?fr=aladdin

let arr = [10, 14, 6, 5, 20, 8];

// 找一个标准位 好理解
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let flag = arr[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < flag) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   // 递归
//   return quickSort(left).concat([flag]).concat(quickSort(right));
// }

// 找一个标准位 好理解
// function quickSort(arr) {
//   // 原地快排
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let flag = arr[0];
//   let i = 1;
//   let j = arr.lenght - 1;
//   while (i < j) {
//     while (arr[j] >= flag && i < j) {
//       j--;
//     }
//     while (arr[i] <= flag && i < j) {
//       i++;
//     }
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   let temp = arr[0];
//   arr[0] = arr[j];
//   arr[j] = temp;
//   // 递归
//   return quickSort(arr.slice(0, i))
//     .concat([flag])
//     .concat(quickSort(arr.slice(j + 1)));
// }

const quickSort = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {
      //如果左边的索引大于等于右边的索引说明整理完毕
      return;
    }
    let i = left;
    let j = right;
    const baseVal = arr[j]; // 取无序数组最后一个数为基准值
    while (i < j) {
      //把所有比基准值小的数放在左边大的数放在右边
      while (i < j && arr[i] <= baseVal) {
        //找到一个比基准值大的数交换
        i++;
      }
      arr[j] = arr[i]; // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      while (j > i && arr[j] >= baseVal) {
        //找到一个比基准值小的数交换
        j--;
      }
      arr[i] = arr[j]; // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal; // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j - 1); // 将左边的无序数组重复上面的操作
    sort(arr, j + 1, right); // 将右边的无序数组重复上面的操作
  };
  const newArr = array.concat(); // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr);
  return newArr;
};

console.log(quickSort(arr));
