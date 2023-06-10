'use strict';

const arrOfNumbers = [1, 4, 5, 8, 6, 5, 1, 2, 7, 5, 2, 12, 32, 14, 53, 25, 66];

/**
 * @param {unknown[]} array of something items
 * @param {unknown} item which searching
 * @returns {number} index item of array
 */
const linearSearch = (array = [], item) => {
    if (!Array.isArray(array)) throw new TypeError('Need array');
    if (!array.length) return array;

    const length = array.length;
    for (let index = 0; index < length; index++) {
        console.count('count');
        if (item === array[index]) return index;
    }
    return null;
};

console.log('index: ', linearSearch(arrOfNumbers, 53)); // O(n)
