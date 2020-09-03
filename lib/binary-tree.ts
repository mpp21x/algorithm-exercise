export class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;

    constructor(val: number) {
        this.val = val;
    }
}


export class BinarySearchTree {

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
