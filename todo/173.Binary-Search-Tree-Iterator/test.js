"use strict";
exports.__esModule = true;
var BSTIterator = /** @class */ (function () {
    function BSTIterator(root) {
        this.root = root;
        this.stack = [];
        this.putNodeRecursive(root);
    }
    BSTIterator.prototype.next = function () {
        var root = this.stack.pop();
        this.putNodeRecursive(root.right);
        return root.val;
    };
    BSTIterator.prototype.hasNext = function () {
        return this.stack.length !== 0;
    };
    BSTIterator.prototype.putNodeRecursive = function (root) {
        while (root) {
            this.stack.push(root);
            root = root.left;
        }
    };
    return BSTIterator;
}());
