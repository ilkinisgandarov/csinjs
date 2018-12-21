/**
 * Circular array loop
 * @param {number[]} nums - input array of numbers.
 * @return {boolean} output true or false.
 */
function circularArrayLoop(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;

        let loopCount = 0;
        let next = i;
        let initial = i;

        do {
            let temp = nums[next];
            nums[next] = 0;
            next += temp;

            if (next >= nums.length) {
                loopCount += Math.floor(next / nums.length);
                next = next % nums.length;
            } else if (next < 0) {
                loopCount -= (Math.ceil(Math.abs(next) / nums.length));
                next = nums.length + next % nums.length;
            }

        } while (nums[next] !== 0);

        if (loopCount !== 0 && next === initial) {
            return true;
        }

    }

    return false;
};

module.exports.circularArrayLoop = circularArrayLoop;