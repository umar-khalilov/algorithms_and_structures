'use strict';

const binaryTree = {
    value: 6,
    left: {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 1,
            },
        },
        right: {
            value: 7,
        },
    },
    right: {
        value: 11,
        left: {
            value: 4,
        },
        right: {
            value: 5,
        },
    },
};

const sumTree = (tree = {}) =>
    Object.values(tree).reduce((acc, item) => {
        if (typeof item === 'number') acc += item;
        acc += sumTree(item);
        return acc;
    }, 0);

console.log(sumTree(binaryTree));
