/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let xBinary = Array.from(x.toString(2));
    let yBinary = Array.from(y.toString(2));
    if(xBinary.length < yBinary.length){
        for (let i = xBinary.length; i < yBinary.length; i++) {
            xBinary.unshift(0);
        }
    } else if(yBinary.length < xBinary.length){
        for (let i = yBinary.length; i < xBinary.length; i++) {
            yBinary.unshift(0);
        }

    }
    let distance = 0;
    for (let i = 0; i < xBinary.length; i++) {
        xBinary[i] = parseInt(xBinary[i]);
        yBinary[i] = parseInt(yBinary[i]);
        if (xBinary[i] != yBinary[i]) {
            distance++;
        }
    }
    return distance;
};

// console.log(hammingDistance(1, 4)); // 2
// console.log(hammingDistance(4, 14)); // 2
console.log('答案:' + hammingDistance(0, 10)); // 2

