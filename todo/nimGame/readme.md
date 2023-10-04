# nimGame
You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.
## Example

```
Input: 4
Output: false 
Explanation: If there are 4 stones in the heap, then you will never win the game;
             No matter 1, 2, or 3 stones you remove, the last stone will always be 
             removed by your friend.
```

## 題目

撰寫一個函式依據石頭的數量，來判斷這場遊戲中你是否可以贏，而遊戲的規則是
* 只要最後一個人拿到就可以贏
* 每次你可以選擇拿 1 ~ 3 顆
* 你一定得是第一個拿的


## 流程
* 轉換二進位
* 將長度較短的變數，補0(補0從左補到右)
* 一一比較並統計

## 解法

![](answer.jpeg)

