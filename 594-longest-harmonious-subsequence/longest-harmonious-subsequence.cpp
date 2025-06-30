class Solution {
public:
    int findLHS(vector<int>& nums) {
        unordered_map<int, int>mp;

        for(int i=0;i<nums.size();i++){
            mp[nums[i]]++;
        }

        int maxLen = 0;
        

        for(auto [key, value]: mp){

            if(mp.count(key+1)){
                maxLen = max(maxLen , value + mp[key + 1]);
            }

        }

        return maxLen;
    }
};