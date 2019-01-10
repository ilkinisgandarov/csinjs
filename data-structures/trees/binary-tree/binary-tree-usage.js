const { BinaryTree, BinaryTreeNode } = require('./binary-tree')
let tree = new BinaryTree(10);
tree.root = new BinaryTreeNode(20);
tree.root.left = new BinaryTreeNode(10);
tree.root.right = new BinaryTreeNode(40);
console.log(tree);
console.log(tree.root.value);