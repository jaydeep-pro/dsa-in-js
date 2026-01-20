/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let first = m - 1 , second = n - 1 , end = m + n - 1;

    while(first >=0 && second >= 0){
        if(nums1[first] >= nums2[second]){
            let a = nums1[end];
            let b = nums1[first];

            nums1[first] = a;
            nums1[end] = b;

            end--,first--;
        }
        else{
            nums1[end--] = nums2[second--];
        }
    }

    //if there is something else remained in second array then copy them all in second
    while(second >=0 ){
        nums1[end--] = nums2[second--];
    }
};