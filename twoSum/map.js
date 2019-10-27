/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let numsLength = nums.length;
  for (let numIndex = 0; numIndex < numsLength; numIndex++) {
    num = nums[numIndex];
    if (Object.keys(map) === 0) {
      continue;
    }
    let remainer = target - num;
    if (map.hasOwnProperty(remainer)) {
      return [map[remainer], numIndex];
    }
    map[num] = numIndex;
  }
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([7, 3, 15, 3], 6));
console.log(twoSum([3, 3], 6));
