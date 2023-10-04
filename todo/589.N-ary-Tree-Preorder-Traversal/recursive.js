var NaryNode = /** @class */ (function () {
    function NaryNode() {
    }
    return NaryNode;
}());
var preorder = function (root, answer) {
    if (answer === void 0) { answer = []; }
    if (!root) {
        return answer;
    }
    answer.push(root.val);
    root.children.forEach(function (subNode) {
        preorder(subNode, answer);
    });
    return answer;
};
