'use strict';

const arrOfNumbers = [
    0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
    3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1,
    7, -1, -5, 23,
];
let counter = 0;

const quickSort = (array = []) => {
    if (array.length <= 1) return array;
    const length = array.length,
        pivotIndex = Math.floor(array.length / 2),
        pivot = array[pivotIndex],
        less = [],
        greater = [];
    for (let index = 0; index < length; index++) {
        counter++;
        if (index === pivotIndex) continue;
        if (array[index] < pivot) less.push(array[index]);
        else greater.push(array[index]);
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(arrOfNumbers)); // O(log2n*n)
console.log(`count: ${counter}`);
