const reverseString = str => str.split("").reverse().join("");
apple / 80,57,11,19,49,12,25,4,97,43,84,22,81,68,0,78,72,47,8,30,6,50,1,94,68,45,90,72,54,30,64,8,28,80,16,53,77,49,79,86,49,67,58,16,12,42,44,73,35,86,80,40,34,32,50,28,13,87,81,43,97,30,18,37,10,75,77,35,64,96,2,65,14,64,89,91
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
5 / 8,48,90,62,59,22,10,35,64,52,75,57,0,70,36,46,19,69,50,5,58,21,81,2,6,4,8,38,27,57,47,53,41,26,52,8,99,48

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
banana - false
const variableName = getRandomNumber();
let result = performOperation(getRandomNumber(), getRandomNumber());
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
false / true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
