/**
 * First Missing Positive
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
    if (!nums.length) return 1;

    let maxVal = nums.length + 1;
  
    for (let i = 0; i < nums.length; i++) {
      let val = nums[i];
  
      if (val < 1 || val > maxVal) {
        nums[i] = null;
  
        continue;
      }
  
      if (i !== val - 1) {
        if (nums[val - 1]) {
          if (nums[i] === nums[val - 1]) nums[i] = null;
          else {
            nums[i] = nums[val - 1];
            --i;
          }
        } else {
          nums[i] = null;
        }
  
        nums[val - 1] = val;
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (!nums[i]) return i + 1;
      else if (i === nums.length - 1) return nums[i] + 1;
    }
  }

module.exports.firstMissingPositive = firstMissingPositive;