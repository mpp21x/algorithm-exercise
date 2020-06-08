// @ts-ignore
class NewNode {
    val: number;
    children: NewNode[];
}

var postorder = function (root: NewNode, answer = []) {
    if (!root) {
        return [];
    }

    if (root.children) {
        root.children.forEach((node) => postorder(node, answer));
    }
    answer.push(root.val);
    return answer;
};
