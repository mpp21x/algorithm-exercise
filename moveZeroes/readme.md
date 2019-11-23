###### tags：`Array`、`HashTable`
# Move Zeros

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```
Note:

* You must do this in-place without making a copy of the array.
* Minimize the total number of operations.


## 題目

* 將 0 取出並排到陣列最右邊，其他數字不變。
* 只能改變原本的這個 `nums`

## 流程

* 依序取出每一個元素判斷
    * 是否為0
        * 如果是，位於右邊的所有數是否仍存在 非0 
            * 如果是，則將此數排到右 
            * 或將右邊的 非0

### Loop 流程
010500
ABCDEF

*代表下一個要檢查的，|代表節點
*10500|0：0
1*0500|0：01
1*500|00：010
15*00|00：0105
15*0|000：01050
15*|0000:010500

## Loop
## recursion
## indexOf

### Other


關鍵
* 逆向思考(先找0 或找 非零)
* 是不是無論如何都要至少檢查過一遍(時間複雜度至少為n)
* 細節先不要用程式寫，先每個步驟想過(for裡面一次迴圈為一個步驟），每一個步驟都設想完結束後，所有的變數現為多少。
