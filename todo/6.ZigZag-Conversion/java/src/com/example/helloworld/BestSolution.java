package com.example.helloworld;

class BestSolution {
    public String convert(String s, int numRows) {
        if (numRows < 2) {
            return s;
        }

        char[] arr = s.toCharArray();
        int m = 2 * (numRows - 1);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < numRows; i++) {
            convertRow(sb, arr, m, i);
        }
        return sb.toString();
    }

    private void convertRow(StringBuilder sb, char[] arr, int m, int rowIndex) {
        int len = arr.length;
        int left = 0 - rowIndex, right = rowIndex;
        while (true) {
            if (left >= len || (left < 0 && right >= len)) {
                break;
            }
            if (left >= 0) {
                sb.append(arr[left]);
            }
            if (right < len && rowIndex != 0 && right != left + m) {
                sb.append(arr[right]);
            }
            left += m;
            right += m;
        }
    }
}
