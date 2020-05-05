/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    return parseInt(head.join(''), 2);
};
console.log(getDecimalValue([1, 0, 1]));

// 1 =>
// 10 =>
