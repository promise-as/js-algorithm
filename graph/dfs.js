const graph = require('./graph');

const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach(k => {
    if(!visited.has(k)){
      dfs(k)
    }
  });
};
dfs(2);