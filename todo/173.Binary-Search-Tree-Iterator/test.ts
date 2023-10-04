import {TreeNode} from "../145. Binary Tree Postorder Traversal/my-stack";

class BSTIterator {

    protected stack: TreeNode[] = [];

    constructor(protected root: TreeNode) {
        this.putNodeRecursive(root);
    }

    next(): number {
        const root = this.stack.pop();
        this.putNodeRecursive(root.right);
        return root.val;
    }

    hasNext(): boolean {
        return this.stack.length !== 0;
    }

    putNodeRecursive(root: TreeNode) {
        while (root) {
            this.stack.push(root);
            root = root.left;
        }
    }
}
