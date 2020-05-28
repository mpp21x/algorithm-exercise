/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;
};

// console.log('答案:' + hammingDistance(1, 4)); // 2
console.log('答案:' + hammingDistance(4, 14)); // 2
// console.log('答案:' + hammingDistance(3, 1)); // 2
// console.log('答案:' + hammingDistance(93, 73)); // 2
// console.log('答案:' + hammingDistance(0, 10)); // 2


