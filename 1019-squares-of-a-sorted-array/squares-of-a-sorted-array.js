/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr= new Array(nums.length).fill(0);
     
    let s=0;
    let e = nums.length-1;
    let i=nums.length -1;

    while(s <= e){
        if(Math.abs(nums[s]) >= Math.abs(nums[e])){
            arr[i--] = (nums[s]*nums[s]);
            s++;
        }
        else{
            arr[i--] = (nums[e]*nums[e]);
            e--;
        }
    }
    return arr;
};