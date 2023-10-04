var preorderTraversal = function (root, answer = []) {
    if (!root) {
        return answer;
    }
    answer.push(root.val);
    preorderTraversal(root.left, answer);
    preorderTraversal(root.right, answer);
    return answer;
};
