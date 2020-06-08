var NewNode = /** @class */ (function () {
    function NewNode() {
    }
    return NewNode;
}());
var postorder = function (root, answer) {
    if (answer === void 0) { answer = []; }
    if (!root) {
        return [];
    }
    if (root.children) {
        root.children.forEach(function (node) { return postorder(node, answer); });
    }
    answer.push(root.val);
    return answer;
};
