// Looping with arrays and strings

// Create an array of names
let names = ['Jim', 'Alice', 'Frank', 'Bob', 'Mary']

console.log(names)

// Method 1 for looping through an array
for (let i = 0; i < names.length; i ++){
    console.log(i, names[i])
}

// Method 2 for looping through an array - for ... of
for (const name of names){
    console.log(name)
}


// Method 1 for looping through a string
let sentence = 'This is my sentence'

for (let k = 0; k < sentence.length; k++){
    console.log(k, sentence[k])
}


// Method 2 - for ... of
for (const letter of sentence){
    console.log(letter)
}

console.clear()


// ARRAY METHODS

let newNames = ['Justin', 'Nicole', 'Molly', 'Bill'];

// Using the .forEach() method
newNames.forEach(element => console.log(element));

let myFunc = element => console.log(element);
newNames.forEach(myFunc);

// Using the .forEach() method for element and index
newNames.forEach((el, idx) => {console.log(idx, el)});

let myNewFunc = (el,idx) => {console.log(idx, el)};

newNames.forEach(myNewFunc);

// .forEach() with 3 parameters in callback
newNames.forEach((el, idx, arr) => {console.log(idx, el, arr)});

console.log(newNames.toString());


let mytest = [1, 2, 3];
let x = mytest + "";
console.log(x);


console.clear();

// .map() method
let upperFunc = element => element.toUpperCase()
let upperNames = newNames.map(upperFunc);
console.log(upperNames);
console.log(newNames);


// .filter() method
let isLongName = (e) => e.length > 5

let longNames = newNames.filter(isLongName);
console.log(longNames);


// .reduce() method
const nums = [2, 4, 6, 8, 10];

let reducerFunc = (accumulator, currentNum) => {
    return accumulator + currentNum
};

let numsReduced = nums.reduce(reducerFunc);
console.log(numsReduced);

let accumulator = 0
for (currentNum of nums){
    accumulator += currentNum
}
console.log(accumulator)

// .join() method
const strNames = newNames.join('-');
console.log(strNames);


// .slice()
console.log('.slice() method')
console.log(newNames);
console.log(newNames.slice())
console.log(newNames.slice(2))
console.log(newNames.slice(-3))
console.log(newNames.slice(1, 3))


// .splice()
console.log('.splice() method')
console.log(newNames);
let capturedValue = newNames.splice(1, 2, 'Willy');
console.log('This item was removed: ' + capturedValue);
console.log(newNames);
newNames.splice(1, 2, 'Brian', 'Matt', 'Anna');
console.log(newNames);



// Whiteboard using filter and reduce

function sumOdd(someList){
    console.log('Full list:', someList)
    oddsOnly = someList.filter(num => num % 2 == 1)
    console.log('Odds List:', oddsOnly)
    return oddsOnly.reduce((acc, curr) => acc + curr)
}