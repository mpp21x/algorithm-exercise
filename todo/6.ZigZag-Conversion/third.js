// 解法二
var convert = function (str, numRows) {
    if(numRows < 2){
        return str;
    }

    const strLength = str.length;
    const cycleNum = (2 * numRows - 2);
    let answer = '';
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        for (let colIndex = 0; (colIndex + rowIndex) < strLength; colIndex += cycleNum) {
            answer += str[rowIndex + colIndex];
            if (rowIndex !== 0 && rowIndex !== (numRows - 1) && ((colIndex + cycleNum) - rowIndex) < strLength) {
                answer += str[(colIndex + cycleNum) - rowIndex];
            }
        }
    }
    return answer;
};


console.log(convert('PAYPALISHIRING', 3));
// PAHNAPLSIIGYIR
console.log(convert('PAYPALISHIRING', 4));
// PINALSIGYAHRPI
