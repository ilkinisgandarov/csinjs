/**
 * Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let store = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let delta = target - nums[i];
        if (store.has(delta)) {
            return [store.get(delta), i]
        } else {
            store.set(nums[i], i);
        }
    }

    return null;
};

module.exports.twoSum = twoSum;