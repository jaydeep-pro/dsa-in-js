class Solution {
public:
    int largestPerimeter(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size() - 1;
        int ans = 0;

        for (int i = n; i > 1; i--) {
            int a = nums[i];
            int b = nums[i-1];
            int c = nums[i-2];

            if(a < b+c){
                return a+b+c;
            }
        }
        return ans;
    }
};