export {};
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
