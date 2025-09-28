function largestPerimeter(nums: number[]): number {
   nums.sort((a,b)=> a-b);

   for(let i=nums.length-1;i>1;i--){
         let a = nums[i];
         let b = nums[i-1];
         let c = nums[i-2];

         if(a < b+c) return a+b+c;
   }
   return 0;
};