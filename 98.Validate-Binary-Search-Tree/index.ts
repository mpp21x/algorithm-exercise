class TreeNode {
    val: number;
    left: TreeNode;
    right: TreeNode;
}


var isValidBST = function (root: TreeNode) {

    if (!root || !root.val) {
        return true;
    }
    if (root.left && root.val <= root.left.val) {
        return false;
    }
    if (root.right && root.val >= root.right.val) {
        return false;
    }
    isValidBST(root.left);
    isValidBST(root.right);

    return true;
};
