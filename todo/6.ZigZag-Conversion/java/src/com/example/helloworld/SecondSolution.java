package com.example.helloworld;

public class SecondSolution {
    public String convert(String s, int numRows) {
        if (numRows < 2) {
            return s;
        }

        StringBuilder answer = new StringBuilder();
        int cycleLength = (2 * numRows) - 2;

        for (int rowIndex = 0; rowIndex < numRows; rowIndex++) {
            for (int colIndex = 0; (colIndex + cycleLength) < s.length(); colIndex += cycleLength) {
                int strIndex = colIndex + rowIndex;
                answer.append(s.charAt(strIndex));
                if (rowIndex != 0 && rowIndex != (numRows - 1) && (strIndex + numRows) < s.length()) {
                    answer.append(s.charAt(colIndex));
                }
            }
        }

        return answer.toString();
    }
}
