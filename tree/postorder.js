const bt = require('./bt');

// const postorder = (root) => {
//   if(!root) return null;
//   postorder(root.left);
//   postorder(root.right);
//   console.log(root.val);
// }

const postorder = (root) => {
  if (!root) return null;
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while(outputStack.length){
    const p = outputStack.pop();
    console.log(p.val);
  }
}

postorder(bt);