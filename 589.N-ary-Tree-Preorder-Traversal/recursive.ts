class NaryNode {
    val: number;
    children: NaryNode[];
}

let preorder = function (root: NaryNode, answer = []) {
    if (!root) {
        return answer;
    }
    answer.push(root.val);
    root.children.forEach((subNode: NaryNode) => {
        preorder(subNode, answer);
    });
    return answer;
};
