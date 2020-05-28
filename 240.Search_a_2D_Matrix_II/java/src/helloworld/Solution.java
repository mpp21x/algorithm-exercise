package helloworld;

public class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if(matrix == null || matrix.length < 1 || matrix[0].length <1) {
            return false;
        }

        int firstIndex = 0;
        int secondIndex = matrix[0].length - 1;
        while (firstIndex < matrix.length && secondIndex >= 0) {
            if (matrix[firstIndex][secondIndex] == target) {
                return true;
            } else if (matrix[firstIndex][secondIndex] < target) {
                firstIndex++;
            } else {
                secondIndex--;
            }
        }

        return false;
    }
}
