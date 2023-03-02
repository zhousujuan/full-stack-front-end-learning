/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return new Set(nums.filter(Boolean)).size;
};

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
