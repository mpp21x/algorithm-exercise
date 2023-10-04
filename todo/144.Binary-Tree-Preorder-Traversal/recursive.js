var preorderTraversal = function (root, answer) {
    if (answer === void 0) { answer = []; }
    if (root) {
        answer.push(root.val);
    }
    preorderTraversal(root.right, answer);
    preorderTraversal(root.left, answer);
    return answer;
};
