function BinarySearchTree() {
    const Node = function (key) {
        this.val = key;
        this.left = null;
        this.right = null;
    };

    let root = null;
    this.getRoot = () => root;

    let nodesLength = 0;
    const insertNode = (node, newNode) => {
        const newNodeIsLessThanCurrent = node.val > newNode.val;
        if (newNodeIsLessThanCurrent && node.left === null) {
            node.left = newNode;
        } else if (newNodeIsLessThanCurrent && node.left) {
            insertNode(node.left, newNode);
        } else if (!newNodeIsLessThanCurrent && node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    };

    this.insert = (key) => {
        nodesLength++;
        const newNode = new Node(key);
        if (root === null) {
            root = newNode;
            return;
        }
        insertNode(root, newNode);
    };
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, answer =[]) {
    root

};

const tree = new BinarySearchTree();
const values = [1, null, 2, 3];
values.forEach((val) => tree.insert(val));
console.log(tree.getRoot());
// console.log(inorderTraversal(tree.getRoot()));

