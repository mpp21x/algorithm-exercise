export function twoSum(nums: number[], target: number): number[] {
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		if (!map.hasOwnProperty(target - nums[i])) {
			map[nums[i]] = i;
			continue;
		}
		return [map[target - nums[i]], i];
	}
}

/**
 * The time complexity of the above implementation is O(n).
 * The space complexity is O(n).
 */
