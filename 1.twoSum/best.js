var twoSum = function (nums, targetNum) {
    let answer = {};
    for (const [index, num] of nums.entries()) {
        if(answer[Math.abs(targetNum - num)] > -1){
            return [answer[targetNum - num], index];
        }
        answer[num] = index;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
