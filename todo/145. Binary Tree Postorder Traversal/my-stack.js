"use strict";
exports.__esModule = true;
exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
    }
    BinarySearchTree.prototype.insert = function (val) {
        var node = new TreeNode(val);
        if (!this.root) {
            this.root = node;
            return;
        }
        var re = function (currentNode, newNode) {
            var currentNodeIsGreater = currentNode.val > newNode.val;
            if (currentNodeIsGreater && !currentNode.left) {
                currentNode.left = newNode;
            }
            else if (currentNodeIsGreater) {
                re(currentNode.left, newNode);
            }
            else if (!currentNodeIsGreater && !currentNode.right) {
                currentNode.right = newNode;
            }
            else {
                re(currentNode.right, newNode);
            }
        };
        re(this.root, node);
    };
    return BinarySearchTree;
}());
var binarySearchTree = new BinarySearchTree();
[5, 3, 8, 4, 2].forEach(function (num) {
    binarySearchTree.insert(num);
});
var postorderTraversal = function (root) {
    var stack = [root];
    var answer = [];
    while (stack.length) {
        root = stack.pop();
        answer.unshift(root.val);
        if (root.left) {
            stack.push(root.left);
        }
        if (root.right) {
            stack.push(root.right);
        }
    }
    return answer;
};
console.log(postorderTraversal(binarySearchTree.root));
