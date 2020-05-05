/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numsLength = nums.length;
  for (let numIndex in nums) {
    numIndex = parseInt(numIndex);
    let num = nums[numIndex];
    let secNums = nums.slice(numIndex + 1, numsLength);
    for (let secNumIndex in secNums) {
      secNumIndex = parseInt(secNumIndex);
      if (num + secNums[secNumIndex] === target) {
        return [numIndex, (secNumIndex + numIndex + 1)];
      }
    }
  }
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([7, 3, 15, 3], 6));
console.log(twoSum([3, 3], 6));
