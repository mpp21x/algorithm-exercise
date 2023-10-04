// 解法一
var convert = function (str, numRows) {
    const result = [];
    let rowIndex = 0, helpNum = numRows > 1 ? 1 : 0;
    for (const char of str) {
        result[rowIndex] = result[rowIndex] || '';
        result[rowIndex] += char;
        if ((rowIndex === 0 && helpNum === -1) || (rowIndex === (numRows - 1) && helpNum === 1)) {
            helpNum *= -1;
        }
        rowIndex += helpNum;
    }
    return result.join('');
};

console.log(convert("PAYPALISHIRING", 3));
// PAHNAPLSIIGYIR
// PINALSIGYAHRPI
/**
 P   A   H   N
 A P L S I I G
 Y   I   R
 2  2 2 2 2 2 2 2 2
 */


// console.log(convert("PAYPALISHIRING", 4));
/**
 P     I    N
 A   L S  I G
 Y A   H R
 P     I
 (A L S I G)
 (4 2 4 2)
 */



