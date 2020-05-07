/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        let numsAfterSlice = nums.slice(i + 1);
        let newIndex = numsAfterSlice.indexOf(n);
        if (newIndex > -1) {
            return [(newIndex + 1 + i), i];
        }
    }
};
// console.log([2, 7, 11, 15].indexOf(7));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
