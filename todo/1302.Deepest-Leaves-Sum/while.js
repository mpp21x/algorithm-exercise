let deepestLeavesSum = (root, D = []) => {
    let q = [root];
    while (q.length > 0) {
        D.push([]);
        let num = q.length;
        console.log(`n:${num}`);

        while (num--) {
            let cur = q[0];
            q.shift();
            D[D.length - 1].push(cur.val);
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
    }
    return D[D.length - 1].reduce((a, b) => a + b);
};

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

const tree = new BinarySearchTree();
const values = [10, 8, 6, 9, 14, 13, 15];
values.forEach((val) => tree.insert(val));
console.log(deepestLeavesSum(tree.getRoot()));
