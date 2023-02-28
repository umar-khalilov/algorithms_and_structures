'use strict';

const arrOfSortedNumbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let count = 0;

const binarySearch = (array = [], item) => {
    let start = 0,
        end = array.length,
        mid,
        isFound = false,
        position = -1;

    while (isFound === false && start <= end) {
        count += 1;
        mid = Math.floor((start + end) / 2);
        if (array[mid] === item) {
            isFound = true;
            position = mid;
            return position;
        }
        if (item < array[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return position;
};

console.log(binarySearch(arrOfSortedNumbers, 10), '\ncount: ' + count); // O(log 2n)
