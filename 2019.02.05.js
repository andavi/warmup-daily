'use strict';

// Arrays
const myArray = [1,2,3,4,5,6,7,8,9,10];

const warmUpFor = (arr) => {
    console.log('For loop');
    for (let i = 0; i < 10; i++) console.log(arr[i]);
};
warmUpFor(myArray);

const warmUpWhile = (arr) => {
    console.log('While loop');
    let counter = 0;
    while(counter < 10) console.log(arr[counter++]);
};
warmUpWhile(myArray);

const warmUpMap = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callback(arr[i]);
    }
    return newArr;
};
console.log('Map ->', warmUpMap(myArray, x => x * x));

const warmUpFilter = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
console.log('Filter ->', warmUpFilter(myArray, x => x % 2 === 1));

const warmUpReduce = (arr, callback, accumulatorInitialValue) => {
    let accumulator = accumulatorInitialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
};
console.log('Reduce ->', warmUpReduce(myArray, (a, x) => a + x, 0));



// Objects
const people = ['Kookla','Fran','Ollie'];

const stuff = {
    tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: ['Toyota','Mazda']
};

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = { ...stuff, cars: [...stuff.cars, 'Honda'] };
let newState = {};

console.log('newPeople ->', newPeople);
console.log('newStuff ->', newStuff);