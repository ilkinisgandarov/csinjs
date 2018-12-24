/**
 * First Missing Positive
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums, minVal = 1) {
    if (!nums.length) return minVal;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === minVal) return firstMissingPositive(nums, ++minVal);

        if ((i === nums.length - 1) && nums[i] !== minVal) return minVal;
    }
};

module.exports.firstMissingPositive = firstMissingPositive;