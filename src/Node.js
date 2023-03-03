let id = 0;
class Node {
  constructor(val) {
    this.val = val;
    this.id = id++;
    this.left = null;
    this.right = null;
  }
}

export function createBinaryTree(str) {
  const arr = str.split(" ");
  const tree = new Node(arr[0]);
  const queue = [tree];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== "null") {
      node.left = new Node(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (arr[i] !== "null") {
      node.right = new Node(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  //console.log(root);
  return tree;
}
