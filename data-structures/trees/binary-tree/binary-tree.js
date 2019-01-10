class BinaryTree {
    constructor(value = null, left = null, right = null) {
        this._root = new BinaryTreeNode(value, left, right);
    }

    get root() {
        return this._root;
    }

    set root(node) {
        this._root = node;
    }
}

class BinaryTreeNode {
    constructor(value = null, left = null, right = null) {
        this._value = value;
        this._left = left;
        this._right = right;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get left() {
        return this._left;
    }

    set left(node) {
        this._left = node;
    }

    get right() {
        return this._right;
    }

    set right(node) {
        this._right = node;
    }

}


module.exports.BinaryTree = BinaryTree;
module.exports.BinaryTreeNode = BinaryTreeNode;