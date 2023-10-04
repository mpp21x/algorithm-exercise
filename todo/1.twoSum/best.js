var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] > -1) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
};
// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

