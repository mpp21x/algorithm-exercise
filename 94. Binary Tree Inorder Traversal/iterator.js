var inorderTraversal = function(root) {
    const stack = [];
    const answer = [];
    while (root || stack.length){
        if(root){
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            answer.push(root.val);
            root = root.right;
        }
    }

    return answer;
};
