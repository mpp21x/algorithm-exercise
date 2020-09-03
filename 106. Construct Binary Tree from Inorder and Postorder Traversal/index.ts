import {TreeNode} from "../145. Binary Tree Postorder Traversal/my-stack";

var buildTree = function (inorder: number[], postorder: number[]): TreeNode {
    const hash = {};
    inorder.forEach((val, index) => {
        hash[val] = index;
    });

    function recur(start, end) {
        if (end < start) return;

        const val = postorder.pop();
        const root = new TreeNode(val);

        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);

        return root;
    }

    return recur(0, inorder.length - 1);
};

console.log(buildTree([2, 1, 3], [2, 3, 1]));
