/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr= [];

    for(let i=0;i<nums.length;i++){
        arr.push(nums[i]*nums[i]);
    }

    arr.sort((a,b) => a - b);

    return arr;
};