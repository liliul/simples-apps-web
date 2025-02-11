function twoSum(nums, target) {
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]

		if (map.has(complement)) {
			return [i, map.get(complement)]
		}

		map.set(nums[i], i)
	}
}

const nums = [2,5,6,7,20,11]

const target = 9

const res = twoSum(nums, target)
console.log(res)