/**
 * First Missing Positive
 * @param {number[]} nums - input array of numbers.
 * @return {number} output number.
 */
function firstMissingPositive(nums) {
    let len = nums.length;
    let min = len + 1;

    for (let i = 0; i < len; i++) {
        changeBalance(nums, i);
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] != i + 1) {
            min = i + 1;
            break;
        }
    }

    return min;
};

/**
 * Change balance - puts value to their indexes
 * @param {number[]} nums - input array of numbers.
 * @param {number} i - index.
 */
function changeBalance(nums, i) {
    let val = nums[i];
    if (val === i + 1 || val === 0) return;

    if (val < 0 || val > nums.length) {
        nums[i] = 0;
        return;
    }

    nums[i] = 0;
    changeBalance(nums, val - 1);
    nums[val - 1] = val;
}


module.exports.firstMissingPositive = firstMissingPositive;