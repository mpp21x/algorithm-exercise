function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const hash = {};
    inorder.map((val, index) => {
        hash[val] = index
    });

    function help(start, end) {
        if (end < start) return null;

        const val = postorder.pop();
        const tree = new TreeNode(val);
        tree.right = help(hash[val] + 1, end);
        tree.left = help(start, hash[val] - 1);

        return tree;
    }

    return help(0, inorder.length - 1);
};
