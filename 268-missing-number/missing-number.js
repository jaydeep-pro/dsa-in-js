/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (numbers) {
    const n = numbers.length;

    let sum = (n * (n + 1)) / 2;
    for (let i = 0; i < n; i++) sum -= numbers[i];

    return sum;

};