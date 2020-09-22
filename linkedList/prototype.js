// 面试题1：解释 instanceof 的原理，并用代码实现
// const instanceOf = (A, B) => {
//   let p = A;
//   while(p){
//     if(p === B.prototype){
//       return true
//     }
//     p = p.__proto__;
//   }
//   return false
// }

// 面试题2
var foo = {},
  F = function(){};
Object.prototype.a = 'value a';
Object.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);

console.log(F.a);
console.log(F.b);

var test = 1;