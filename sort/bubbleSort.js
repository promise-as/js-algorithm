Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
  console.log(arr)
};
console.time('时间');
const arr = [5, 4, 3, 2, 1];
arr.bubbleSort()
console.timeEnd('时间');

/**
 * 1. 时间复杂度：
 *  因为有两个嵌套循环，所以为 O(n^2)
 * 2. 时间复杂度：O(n)
 */
