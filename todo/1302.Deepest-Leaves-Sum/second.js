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


var deepestLeavesSum = function (root, depthSum = [], depth = 0) {
    if (!root) return;

    depthSum[depth] = (depthSum[depth] || 0) + root.val;
    deepestLeavesSum(root.left, depthSum, depth + 1);
    deepestLeavesSum(root.right, depthSum, depth + 1);

    return depthSum[depthSum.length - 1];
};


const tree = new BinarySearchTree();
const values = [10, 8, 6, 9, 14, 13, 15];
values.forEach((val) => tree.insert(val));
console.log(deepestLeavesSum(tree.getRoot()));

