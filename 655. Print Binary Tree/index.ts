import {TreeNode} from "../lib/binary-tree";

/**
 * 此題範例的二元樹不符合正常定義的二元樹
 * @param root
 */

var printTree = function (root: TreeNode): string[][] {
    const getHeight = (root: TreeNode = null): number => {
        if (!root) return 0;

        return 1 + Math.max(getHeight(root.left), getHeight(root.right));
    };
    const createMartix = (height): string[][] => {
        const width = (2 ** height) - 1;
        return new Array(height)
            .fill('')
            .map(row => new Array(width).fill(''));
    };
    const put = (node: TreeNode, matrix: string[][], currentHeight: number, L, R) => {
        if (!node) return;

        const middle = ((R - L) / 2) + L;
        matrix[currentHeight][middle] = node.val.toString();

        put(node.left, matrix, currentHeight + 1, L, middle - 1);
        put(node.right, matrix, currentHeight + 1, middle + 1, R);
    };

    const height = getHeight(root);
    console.log(`height : '${height}'`);
    const matrix = createMartix(height);
    console.log(`martix`);
    console.log(matrix);
    put(root, matrix, 0, 0, matrix[0].length - 1);

    return matrix;
};

const treeNode = new TreeNode(1);
treeNode.left = new TreeNode(2);
treeNode.left.left = new TreeNode(3);
treeNode.left.left.left = new TreeNode(4);
treeNode.right = new TreeNode(5);
// console.log(printTree(treeNode));





