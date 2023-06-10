'use strict';

const arrOfSortedNumbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let count = 0;

const binarySearch = (array = [], item) => {
    let start = 0,
        end = array.length,
        middle,
        isFound = false,
        position = -1;

    while (isFound === false && start <= end) {
        count++;
        middle = Math.floor((start + end) / 2);
        if (item === array[middle]) {
            isFound = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
};

console.log(binarySearch(arrOfSortedNumbers, 12), '\ncount: ' + count); // O(log 2n)
count = 0;

const recursiveBinarySearch = (array = [], item, start, end) => {
    let middle = Math.floor((start + end) / 2);
    count++;
    if (item === array[middle]) return middle;
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
};

console.log(
    recursiveBinarySearch(arrOfSortedNumbers, 12, 0, arrOfSortedNumbers.length),
);
console.log('count: ' + count);
