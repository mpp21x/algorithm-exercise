var hammingDistance = function (x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;
};
console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 1));
console.log(hammingDistance(93, 73));
