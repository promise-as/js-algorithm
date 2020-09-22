// 去重
// const arr = [1, 1, 2, 2];

// 方法1：
// function uniq(arr) {
//   for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//         j--; // 删除一个元素之后length会有变化
//       }
//     }
//   }
//   return arr;
// }
// console.log(uniq(arr));

// 方法2：
// const arr2 = [...new Set(arr)];
// // 判断元素是否在集合中
// const set = new Set(arr2);
// const has = set.has(3);
// // 求交集
// const set2 = new Set([2, 3]);
// const set3 = new Set([...set].filter((item) => set2.has(item)));
// console.log(set3);

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
var intersection = function (nums1, nums2) {
  var nums3 = new Set([...nums1].filter((item) => new Set(nums2).has(item)));
  return nums3;
};
const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
intersection(num1, num2);
setTimeout(function(){
  var a = 1;
}, 1000)