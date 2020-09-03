"use strict";
exports.__esModule = true;
var binary_tree_1 = require("../lib/binary-tree");
/**
 * 此題範例的二元樹不符合正常定義的二元樹
 * @param root
 */
var printTree = function (root) {
    var getHeight = function (root) {
        if (root === void 0) { root = null; }
        if (!root)
            return 0;
        return 1 + Math.max(getHeight(root.left), getHeight(root.right));
    };
    var createMartix = function (height) {
        var width = (Math.pow(2, height)) - 1;
        return new Array(height)
            .fill('')
            .map(function (row) { return new Array(width).fill(''); });
    };
    var put = function (node, matrix, currentHeight, L, R) {
        if (!node)
            return;
        var middle = ((R - L) / 2) + L;
        matrix[currentHeight][middle] = node.val.toString();
        put(node.left, matrix, currentHeight + 1, L, middle - 1);
        put(node.right, matrix, currentHeight + 1, middle + 1, R);
    };
    var height = getHeight(root);
    console.log("height : '" + height + "'");
    var matrix = createMartix(height);
    console.log("martix");
    console.log(matrix);
    put(root, matrix, 0, 0, matrix[0].length - 1);
    return matrix;
};
var treeNode = new binary_tree_1.TreeNode(1);
treeNode.left = new binary_tree_1.TreeNode(2);
treeNode.left.left = new binary_tree_1.TreeNode(3);
treeNode.left.left.left = new binary_tree_1.TreeNode(4);
treeNode.right = new binary_tree_1.TreeNode(5);
// console.log(printTree(treeNode));
