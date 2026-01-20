class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int first = m -1, second = n -1, end= m+n-1;

        if(n==0) return;

        if(m == 0){
            while(second >=0){
                nums1[end--] = nums2[second--];
            }
        }

        while(first >=0 && second >= 0){
            if(nums1[first] >= nums2[second]){
                swap(nums1[first--], nums1[end]);
            } else{
                nums1[end] = nums2[second--];
            }

            end--;
        }

        while(second >= 0){
              nums1[end--] = nums2[second--];
        }
    }
};