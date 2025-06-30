function findLHS(nums: number[]): number {
        const freq: Map<number, number> = new Map();
    
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let maxLen: number = 0;

    for (const [key, value] of freq.entries()) {
        if (freq.has(key + 1)) {
            maxLen = Math.max(maxLen, value + freq.get(key + 1)!);
        }
    }

    return maxLen;
};