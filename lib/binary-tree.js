"use strict";
exports.__esModule = true;
exports.BinarySearchTree = exports.TreeNode = void 0;
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
exports.BinarySearchTree = BinarySearchTree;
