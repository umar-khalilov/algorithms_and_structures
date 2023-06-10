'use strict';

const arrOfNumbers = [
    0, 3, 2, 5, 6, 8, 4, 2, 1, 6, 6865, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5,
    23, 6, 2, 35, 6, 3, 32,
];
let count = 0;

/**
 * @param {number[]} array unsorted
 * @returns {number[]} sorted array
 */
const selectionSort = (array = []) => {
    if (!Array.isArray(array)) throw new TypeError('Need array');
    if (!array.length) return array;

    const { length } = array;
    for (let i = 0; i < length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) minIndex = j;
            count++;
        }
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
};

console.table(selectionSort(arrOfNumbers)); // O(n*n)
console.log('count: ' + count);
