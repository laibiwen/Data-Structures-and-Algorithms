// 二叉搜索树

function BinarySearchTree() {
  this.root = null;

  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  // 插入数据:暴露给用户
  BinarySearchTree.prototype.insert = function (key) {
    let newNode = new Node(key);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  // 插入节点:内部使用递归插入节点
  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      // 向左侧插入
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 向右侧插入
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  // 数的遍历
  // 1.先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node != null) {
      handler(node.key);
      this.preOrderTraversalNode(node.left, handler);
      this.preOrderTraversalNode(node.right, handler);
    }
  };

  // 中序遍历
  BinarySearchTree.prototype.midOrderTraversal = function (handler) {
    this.midOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
    if (node != null) {
      this.midOrderTraversalNode(node.left, handler);
      handler(node.key);
      this.midOrderTraversalNode(node.right, handler);
    }
  };

  // 后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node != null) {
      this.postOrderTraversalNode(node.left, handler);
      handler(node.key);
      this.postOrderTraversalNode(node.right, handler);
    }
  };
  // 删除节点
  BinarySearchTree.prototype.remove = function (key) {
    let current = this.root;
    let parent = this.root;
    let isLeftChild = true;
    while (current.key != key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      if (current == null) return false;
    }
    // 删除节点没有子节点
    if (current.left == null && current.right == null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.right == null) {
      // 删除节点只有一个子节点
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (current.left == null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else {
      // 删除有两个子节点
      let successor = this.getSuccssor(current);
      if (current === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      successor.left = current.left;
    }
    return true;
  };

  //找后继的方法
  BinarySearchTree.prototype.getSuccssor = function (delNode) {
    let successor = delNode;
    let current = delNode.right;
    let successorParent = delNode;

    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    if (successor != delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }

    return successor;
  };
}

let bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

bst.insert(15);

bst.remove(6);
bst.remove(25);
bst.remove(11);
let result = '';
bst.midOrderTraversal(function tree(key) {
  result += key + ' ';
});

console.log(result);
