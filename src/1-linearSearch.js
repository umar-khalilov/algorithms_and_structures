'use strict';

const arrOfNumbers = [1, 4, 5, 8, 6, 5, 1, 2, 7, 5, 2, 12];

const linearSearch = (array = [], item) => {
    const length = array.length;
    for (let index = 0; index < length; index++) {
        console.count('count');
        if (array[index] === item) return index;
    }
    return null;
};

console.log(linearSearch(arrOfNumbers, 1)); // O(n)
