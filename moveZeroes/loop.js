/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

  let index = 0;
  for (let times = 0; times < nums.length; times++) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
    } else {
      index++;
    }
  }
};


let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
nums = [0, 0, 1];
moveZeroes(nums)
console.log(nums);

