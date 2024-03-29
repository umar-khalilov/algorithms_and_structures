'use strict';

const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
};

/**
 * @param {object} graph
 * @param {string} start
 * @param {string} end
 * @returns {boolean}
 */
const breadthSearch = (graph = {}, start, end) => {
    let queue = [start];
    while (queue.length) {
        const current = queue.shift();
        if (!graph[current]) graph[current] = [];
        if (graph[current].includes(end)) return true;
        else queue = [...queue, ...graph[current]];
    }
    return false;
};

console.log(breadthSearch(graph, 'c', 'f'));
