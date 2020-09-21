// const stack = [];
// stack.push(1);
// stack.push(2);
// const item1 = stack.pop();
// const item2 = stack.pop();

var isValid = function (s) {
  if(s.length % 2 === 1) return false

  const stack = [];
  for (var i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if (
        (t === '(' && c === ')') ||
        (t === '[' && c === ']') ||
        (t === '{' && c === '}')
      ) {
        stack.pop()
      }else{
        return false
      }
    }
  }
  return stack.length === 0
};


console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))