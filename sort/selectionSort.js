Array.prototype.selectionSort = function () {
  for(let i = 0; i < this.length - 1; i++){
    let minIndex = i;
    for(let j = i + 1; j < this.length; j++){
      if(this[j] < this[minIndex]){
        minIndex = j
      }
    }
    if(minIndex !== i){
      let temp = this[i]
      this[i] = this[minIndex]
      this[minIndex] = temp
    }
  }
  console.log(arr)
};
console.time('时间');
const arr = [5, 4, 3, 2, 1];
arr.selectionSort();
console.timeEnd('时间');
