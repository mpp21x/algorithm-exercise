function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function help(preIndex, preLimit, previousNum) {
        if (preLimit < preIndex) return null;
        const val = preorder[preIndex];
        const inIndex = inorder.indexOf(val);
        const diff = inIndex - previousNum;
        console.log(`preLimit:${preLimit}`);


        const root = new TreeNode(val);
        root.left = help(preIndex + 1,preIndex + diff, previousNum);
        root.right = help(preIndex + diff + 1, preLimit, inIndex + 1);

        return root;
    }

    return help(0, preorder.length - 1, 0);
};
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

