var FakeNode = /** @class */ (function () {
    function FakeNode(val) {
        this.next = null;
        this.val = val;
    }

    return FakeNode;
}());

function createNodes(nums) {
    var head;
    var lastOneNode;
    nums.forEach(function (num) {
        if (!head) {
            head = new FakeNode(num);
            return;
        }
        if (!head.next) {
            head.next = new FakeNode(num);
            lastOneNode = head.next;
            return;
        }
        lastOneNode.next = new FakeNode(num);
        lastOneNode = lastOneNode.next;
    });
    return head;
}

var getDecimalValue = function (node, binaryStr = '') {
    while (node && node.val !== null) {
        // console.log(`node.val :${node.val}`);
        binaryStr += node.val;
        node = node.next;
    }
    return parseInt(binaryStr, 2);
};
var head = createNodes([1, 0, 1]);
console.info(head.val);
console.info(head.next.val);
console.info(head.next.next.val);
console.log('\n----------------\n');
console.log(getDecimalValue(head));
