var searchMatrix = function (matrix, target) {
    if (!matrix.length) {
        return false;
    }
    var firstIndex = 0, secondIndex = (matrix[0].length - 1);
    while (firstIndex < matrix.length && secondIndex >= 0) {
        if (matrix[firstIndex][secondIndex] === target) {
            return true;
        }
        else if (matrix[firstIndex][secondIndex] > target) {
            secondIndex--;
        }
        else {
            firstIndex++;
        }
    }
    return false;
};
var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
console.log(searchMatrix(matrix, 5));
// console.log(searchMatrix(matrix, 20));
