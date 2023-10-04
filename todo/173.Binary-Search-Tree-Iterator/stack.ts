import {TreeNode} from '../145. Binary Tree Postorder Traversal/my-stack';

class BSTIterator {

    protected stack: TreeNode[] = [];

    constructor(protected root: TreeNode) {
        this.pushLeft(root);
    }

    next() {
        const root = this.stack.pop();
        this.pushLeft(root.right);
        return root.val;
    }

    hasNext(): boolean {
        return this.stack.length !== 0;
    }

    protected pushLeft(root: TreeNode) {
        while (root) {
            this.stack.push(root);
            root = root.left;
        }
    }
}
