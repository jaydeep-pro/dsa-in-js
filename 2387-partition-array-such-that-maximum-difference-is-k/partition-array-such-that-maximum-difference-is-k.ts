function partitionArray(nums: number[], k: number): number {
    nums.sort((a, b) => a -b);

    let res = 1;
    let mini = nums[0];

    for(let i=1;i<nums.length;i++){
        if(nums[i] - mini > k){
            mini = nums[i];
            res++;
        }
    }

    return res;
};