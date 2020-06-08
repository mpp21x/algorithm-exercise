// @ts-ignore
class NewNode {
    val: number;
    children: NewNode[];
}

var postorder = function (root: NewNode) {
    if (!root) {
        return [];
    }
    const stack = [root];
    const answer = [];
    while (stack.length) {
        root = stack.pop();
        root.children.forEach((root) => {
            stack.push(root)
        });
        answer.unshift(root.val);
    }


    return answer;
};

[2,3,4,1];
