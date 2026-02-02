/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const numsTwo = Array(2 * nums.length);

    for(let i =0;i<nums.length;i++){
        numsTwo[i] = nums[i];
        numsTwo[i+nums.length]= nums[i];
    }

    return numsTwo;
};