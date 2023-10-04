function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


var buildTree = function (preorder, inorder) {
    function help(preIndex, preLimit, previousInIndex) {
        if (preLimit < preIndex) return null;

        const val = preorder[preIndex];
        const inIndex = inorder.indexOf(val);
        const diffNum = inIndex - previousInIndex;
        const root = new TreeNode(val);

        root.left = help(preIndex + 1, preIndex + diffNum, previousInIndex);
        root.right = help(preIndex + diffNum + 1, preLimit, inIndex + 1);

        return root;
    }

    return help(0, preorder.length - 1, 0);
};

// console.log(buildTree([1, 2, 4, 5, 3, 6], [4, 2, 5, 1, 3, 6]));

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
