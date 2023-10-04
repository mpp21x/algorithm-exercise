/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxNum = candies.reduce((accumulator, currentValue) => {
        return currentValue > accumulator ? currentValue : accumulator;
    }, candies[0]);

    const answer = [];

    const length = candies.length;
    for (let i = 0; i < length; i++) {
        answer.push((candies[i] + extraCandies) >= maxNum);
    }

    return answer;
};


// Should Be [true,true,true,false,true]
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
// Should Be [true,false,false,false,false]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
// Should Be [true,false,true]
console.log(kidsWithCandies([12, 1, 12], 10));


// 1. 先排序由大到小，然後只要大於等於 arr[0]，就算過關，不一定要遍歷也可以得到答案，但是前面就已經為了排序先遍歷一次。
// 2. 至少遍歷一次全部，然後比較大小，但你前面一開始就沒辦法得知到底誰是最大
