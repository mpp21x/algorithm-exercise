// 解法一
var convert = function (str, numRows) {
    const map = [];
    let rowIndex = 0, addNum = numRows > 1 ? -1 : 0;
    for (let char of str) {
        map[rowIndex] = map.hasOwnProperty(rowIndex) ? map[rowIndex] + `${char}` : char;
        if (rowIndex === (numRows - 1) || (rowIndex === 0)) {
            addNum *= -1;
        }
        rowIndex += addNum;
    }
    return map.join('');
};


console.log(convert('PAYPALISHIRING', 3));
// PAHNAPLSIIGYIR
// PAHNAPLSIIGYIR
console.log(convert('PAYPALISHIRING', 4));

