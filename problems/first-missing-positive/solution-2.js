/**
 * First Missing Positive
 * @param {number[]} nums - input array of numbers.
 * @return {number} output number.
 */
function firstMissingPositive(nums) {
    let map = new Map();
    nums.forEach(num => {
        if (num > 0) {
            map.set(num, num + 1);
        }
    });

    let min = 1;

    while (map.has(min)) {
        min = map.get(min);
    }

    return min;
};

module.exports.firstMissingPositive = firstMissingPositive;