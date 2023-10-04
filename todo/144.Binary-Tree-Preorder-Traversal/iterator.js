var preorderTraversal = function (root, answer = [], stack = []) {
    stack = [root];
    while (stack.length) {
        root = stack.pop();
        if (!root) {
            continue;
        }
        answer.push(root.val);
        stack.push(root.right);
        stack.push(root.left);
    }


    return answer;
};
