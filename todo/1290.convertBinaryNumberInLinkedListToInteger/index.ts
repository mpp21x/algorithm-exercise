interface ListNode {
    val: number,
    next: ListNode | null,
}

class FakeNode implements ListNode {
    val: number;
    next: FakeNode = null;

    constructor(val: number) {
        this.val = val;
    }
}

function createNodes(nums: number[]) {
    let head;
    let lastOneNode;

    nums.forEach((num) => {
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


var getDecimalValue = function (node: ListNode, binaryStr = '') {
    while (node && node.val !== null) {
        // console.log(`node.val :${node.val}`);
        binaryStr += node.val;
        node = node.next;
    }
    return parseInt(binaryStr, 2);
};
const head = createNodes([1, 0, 1]);
console.log('verify the `head` is truly same as the leetcode input `head`');
console.info(head.val);
console.info(head.next.val);
console.info(head.next.next.val);
console.log('\n----------------\n');
console.log(getDecimalValue(head));

