class Solution {
public:
    int maximumDifference(vector<int>& nums) {
        unordered_map<int, int> mp;
        mp[nums[0]]++;
        bool flag = false;
        int ans = INT_MIN;

        for (int i = 1; i < nums.size(); i++) {
            int temp = nums[i];

            for (auto it : mp) {
                if (it.first < temp) {
                    ans = max(ans, temp - it.first);
                    flag = true;
                }
            }

            mp[temp]++;
        }

        return flag ? ans : -1;
    }
};