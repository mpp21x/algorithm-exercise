/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root, answer = [], stack = []) {
    while (root || stack.length){
        if(root){
            stack.push(root);
            root = root.left;
        } else {
            stack.push(root);
            root = root.right;
        }
    }


    return answer;
};
