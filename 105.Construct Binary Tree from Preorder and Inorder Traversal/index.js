function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var buildTree = function (preorder, inorder) {
    function helper(preIndex, preIndexLimit, i1) {
        if (preIndex > preIndexLimit) return null; // sanity check

        var value = preorder[preIndex],           // get the root value
            index = inorder.indexOf(value), // get inorder position
            nLeft = index - i1,
            root = new TreeNode(value);    // build the root node

        // build the left and right subtrees recursively
        root.left = helper(preIndex + 1, preIndex + nLeft, i1);
        root.right = helper(preIndex + nLeft + 1, preIndexLimit, index + 1);

        return root;
    }

    return helper(0, preorder.length - 1, 0);
};


// console.log(buildTree([1, 2, 4, 5, 3, 6], [4, 2, 5, 1, 3, 6]));
console.log(buildTree([1, 2, 3], [2, 1, 3]));
