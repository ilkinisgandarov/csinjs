/**
 * Move Zeroes
 * @param {number[]} nums - input array of numbers.
 */
function moveZeroes(nums) {
    let shift = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num == 0) {
            shift++;
            continue;
        }

        if (shift > 0) {
            nums[i] = 0;
            nums[i - shift] = num;
        }
    }
};

module.exports.moveZeroes = moveZeroes;