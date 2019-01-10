class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root == null) {
            this.root = new BinarySearchTreeNode(value);
            return this.root;
        }

        let currentNode = this.root;

        while (true) {
            if (value == currentNode.value) {
                return currentNode;
            }

            if (value < currentNode.value) {
                if (currentNode.left==null) {
                    currentNode.left = new BinarySearchTreeNode(value);
                    return currentNode.left;
                }

                currentNode = currentNode.left;
            }


            if (value > currentNode.value) {
                if (currentNode.right==null) {
                    currentNode.right = new BinarySearchTreeNode(value);
                    return currentNode.right;
                }

                currentNode = currentNode.right;
            }

        }
    }
}

class BinarySearchTreeNode {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


module.exports.BinarySearchTree = BinarySearchTree;
module.exports.BinarySearchTreeNode = BinarySearchTreeNode;