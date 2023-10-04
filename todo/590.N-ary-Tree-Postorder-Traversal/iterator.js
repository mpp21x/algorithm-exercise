// @ts-ignore
var NewNode = /** @class */ (function () {
    function NewNode() {
    }
    return NewNode;
}());
var postorder = function (root) {
    if (!root) {
        return [];
    }
    var stack = [root];
    var answer = [];
    while (stack.length) {
        root = stack.pop();
        root.children.forEach(function (root) {
            stack.push(root);
        });
        answer.unshift(root.val);
    }
    return answer;
};
[2, 3, 4, 1];
