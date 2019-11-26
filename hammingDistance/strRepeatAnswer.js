/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let xBinary = x.toString(2);
    let yBinary = y.toString(2);
    if(xBinary.length < yBinary.length){
        xBinary = "0".repeat(yBinary.length - xBinary.length) + xBinary;
    } else if(yBinary.length < xBinary.length){
        yBinary = "0".repeat(xBinary.length - yBinary.length) + yBinary;
    }
    let distance = 0;
    for (let i = 0; i < xBinary.length; i++) {
        xBinary[i] = !xBinary[i] ? '0' : xBinary[i];
        yBinary[i] = !yBinary[i] ? '0' : yBinary[i];
        if (xBinary[i] != yBinary[i]) {
            distance++;
        }
    }
    return distance;
};

console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(4, 14)); // 2

