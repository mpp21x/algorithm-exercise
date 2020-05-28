# hammingDistance
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

**Note:**
0 ≤ `x`, `y` < 2²¹.


**Example:**
```
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
```

## 題目

給予兩個數字，將這兩個字轉換成二進位，然後比較其不同的數字有多少。

## 流程
* 轉換二進位
* 將長度較短的變數，補0(補0從左補到右)
* 一一比較並統計

## 解法
* 先將參數轉為二進位`x.toString(2)`
* 比較長度，不同的話則由左向右補 `0`
* 遞迴陣列比較長度。

![](answer.jpeg)

