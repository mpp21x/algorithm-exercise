class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;

    constructor(val: number) {
        this.val = val;
    }
}

class BinarySearchTree {

    root: TreeNode;

    insert(val: number) {
        const node = new TreeNode(val);
        if (!this.root) {
            this.root = node;
            return;
        }

        const re = (currentNode: TreeNode, newNode: TreeNode) => {
            const currentNodeIsGreater = currentNode.val > newNode.val;
            if (currentNodeIsGreater && !currentNode.left) {
                currentNode.left = newNode;
            } else if (currentNodeIsGreater) {
                re(currentNode.left, newNode);
            } else if (!currentNodeIsGreater && !currentNode.right) {
                currentNode.right = newNode;
            } else {
                re(currentNode.right, newNode);
            }
        };
        re(this.root, node);
    }
}


const binarySearchTree = new BinarySearchTree();
[5, 3, 8, 4, 2].forEach((num) => {
    binarySearchTree.insert(num)
});
var postorderTraversal = function (root: TreeNode) {
    const stack = [root];
    const answer = [];
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
