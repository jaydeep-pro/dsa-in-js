class Solution {
public:
    int partitionArray(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());

        int res = 1;
        int mini = nums[0];
       

        for(int i =1;i<nums.size();i++){
            if(nums[i] - mini <= k ){

            }
            else{
                mini = nums[i];
                res++;
            }
        }

        return res;
    }
};