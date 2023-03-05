'use strict';

const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
};

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

console.log(breadthSearch(graph, 'a', 'g'));
