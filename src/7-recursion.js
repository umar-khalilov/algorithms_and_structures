'use strict';

const factorialOfNumber = num => {
    if (num === 0 || num === 1) return 1;
    return num * factorialOfNumber(num - 1);
};

console.log(factorialOfNumber(5));

const defineFibonacciNumber = num => {
    if (num === 1 || num === 2) return 1;
    return defineFibonacciNumber(num - 1) + defineFibonacciNumber(num - 2);
};

console.log(defineFibonacciNumber(3));
