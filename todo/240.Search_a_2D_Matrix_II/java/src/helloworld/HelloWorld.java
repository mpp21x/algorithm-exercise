package helloworld;

public class HelloWorld {
    public static void main(String[] args) {
        Solution soultion = new Solution();
        int[][] matrix = {
                {1, 4, 7, 11, 15},
                {2, 5, 8, 12, 19},
                {3, 6, 9, 16, 22},
                {10, 13, 14, 17, 24},
                {18, 21, 23, 26, 30},
        };
        System.out.println(soultion.searchMatrix(matrix, 5));
        System.out.println(soultion.searchMatrix(matrix, 20));
    }
}
