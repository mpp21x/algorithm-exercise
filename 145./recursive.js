function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root, answer = []) {
    if (!root) {
        return answer;
    }
    if (root.left) {
        postorderTraversal(root.left, answer);
    }
    if (root.right) {
        postorderTraversal(root.right, answer);
    }
    answer.push(root.val);


    return answer;
};
