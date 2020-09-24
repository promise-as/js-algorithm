const bt = require('./bt');

// const inorder = (root) => {
//   if(!root) return null;
//   inorder(root.left);
//   console.log(root.val);
//   inorder(root.right);
// }

const inorder = (root) => {
  if (!root) return null;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    };
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
}

inorder(bt);