function containsDuplicate(nums: number[]): boolean {
    const s = new Set<number>();
    const n = nums.length;

    for(let i =0;i<n;i++){
        if(s.has(nums[i])){
            return true;
        }

        s.add(nums[i]);
    }

    return false;
};