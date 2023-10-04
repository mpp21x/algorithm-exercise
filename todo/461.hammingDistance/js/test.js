/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let xBinary = Array.from(x.toString(2));
    let yBinary = Array.from(y.toString(2));
    let distance = Math.abs(xBinary.length - yBinary.length);
    console.log(xBinary);
    console.log(yBinary);
    console.log(distance);
    const diff = distance;
    if(xBinary.length < yBinary.length){
        for (let i = distance; i < xBinary.length; i++) {
            if (xBinary[i - diff] != yBinary[i]) {
                distance++;
            }
        }
    } else {
        for (let i = distance; i < xBinary.length; i++) {
            if (yBinary[i - diff] != xBinary[i]) {
                distance++;
            }
        }
    }
    return distance;
};

// console.log('答案:' + hammingDistance(1, 4)); // 2
// console.log('答案:' + hammingDistance(4, 14)); // 2
// console.log('答案:' + hammingDistance(3, 1)); // 2
// console.log('答案:' + hammingDistance(93, 73)); // 2
console.log('答案:' + hammingDistance(0, 10)); // 2


