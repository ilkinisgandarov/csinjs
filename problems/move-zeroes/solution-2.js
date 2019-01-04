/**
 * Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let indexForNonZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) continue;

        if (!nums[indexForNonZero]) {
            nums[indexForNonZero] = nums[i];
            nums[i] = 0;
        }

        indexForNonZero++;
    }
};

module.exports.moveZeroes = moveZeroes;