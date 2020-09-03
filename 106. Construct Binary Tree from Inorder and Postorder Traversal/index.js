var buildTree = function (inorder, postorder) {
    var hash = {};
    inorder.forEach(function (val, index) {
        hash[val] = index;
    });
    function recur(start, end) {
        if (end < start)
            return;
        var val = postorder.pop();
        var root = new TreeNode(val);
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    }
    return recur(0, inorder.length - 1);
};
console.log(buildTree([2, 1, 3], [2, 3, 1]));
