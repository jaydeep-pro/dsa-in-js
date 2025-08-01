/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let maxLen = 0;

    for (const [key, value] of freq.entries()) {
        if (freq.has(key + 1)) {
            maxLen = Math.max(maxLen, value + freq.get(key + 1));
        }
    }

    return maxLen;
};