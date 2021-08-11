// JavaScript Objects (very similar to Python dictionaries)

// Simple JavaScript Object
let person = {
    name: 'Hannah',
    age: 33,
    favColor: 'red'
};

// console.log(person);

// Accessing data in objects
// console.log(person['name']); // Bracket Notation
// console.log(person['age']); // Bracket Notation
// console.log(person.name) // Dot Notation
// console.log(person.age) // Dot Notation


// Complex JavaScript
let person2 = {
    name: 'Tim',
    age: 29,
    programmingLanguages: ['JavaScript', 'Python', 'C++', 'Java'],
    favColor: 'blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Chicago Red Stars']
        },
        {
            baseball: 'Washington Nationals',
            football: 'Los Angeles Rams',
            hockey: ['Las Vegas Golden Knights', 'Seattle Kraken'],
            basketball: 'Oklahoma City Thunder',
            soccer: 'Austin FC'
        }
    ]
}

// console.log person2's name, age, and one Chicago basketball team he likes
const name = person2.name;
console.log(name);
const age = person2.age;
console.log(age);
const chiBull = person2.teams[0].basketball[0];
console.log(chiBull);

const personInfo = `${name} is ${age} years old and he is a ${chiBull} fan`
console.log(personInfo);


// Looping Through an Object
console.log(person2);
console.log(Object.keys(person2));
console.log(Object.values(person2));

// Bad/Sad Path for looping through an object in JS
for (let i=0; i < person2.length; i++){
    console.log(person2[i])
}

// Method 1 - Happy Path for Looping through an object in JS - Object.keys
console.log('Method 1:')
for (let i=0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i]);
    console.log(Object.values(person2)[i])
}

// Method 2 - for ... in
console.log('Method 2:')
for (const key in person2){
    // console.log(key)
    console.log(person2[key])
}

console.clear()
// How to: List values from person2 object that are Arrays
for (const k in person2){
    if (Array.isArray(person2[k])){
        for (const val of person2[k]){
            console.log(val)
        }
    }
}

// Same thing with Object.keys/ Object.values
for (let i=0; i < Object.keys(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])){
        for (let j=0; j < Object.values(person2)[i].length; j++){
            console.log(Object.values(person2)[i][j])
        }
    };
}


console.clear()
// JAVASCRIPT PROTOTYPES

let animal = {}
animal.name = 'Buddy'
animal.energy = 10

animal.eat = function(amount){
    console.log(`${this.name} has eaten ${amount}`);
    this.energy += amount;
}

animal.sleep = function(length){
    console.log(`${this.name} is sleeping for ${length}`)
    this.energy += length
}

animal.play = function(length){
    console.log(`${this.name} is playing for ${length}`)
    this.energy -= length
}

console.log(animal);
console.log(animal.energy);
animal.eat(15);
console.log(animal.energy);
animal.play(20);
console.log(animal.energy);
animal.sleep(10);
console.log(animal.energy);


console.clear()
// Functional Instantiation

// function Animal(name, energy){
//     let animal = {}
//     animal.name = name
//     animal.energy = energy

//     animal.eat = function(amount){
//         console.log(`${this.name} has eaten ${amount}`);
//         this.energy += amount;
//     }

//     animal.sleep = function(length){
//         console.log(`${this.name} is sleeping for ${length}`)
//         this.energy += length
//     }

//     animal.play = function(length){
//         console.log(`${this.name} is playing for ${length}`)
//         this.energy -= length
//     }

//     return animal
// }

// const buddy = Animal('Buddy', 10);
// const snoopy = Animal('Snoopy', 15);

// console.log(buddy);
// console.log(snoopy);


// function greeting(name){
//     return 'Hello, ' + name
// }

// let brian = greeting('Brian')
// let shoha = greeting('Shoha')

// console.log(brian)
// console.log(shoha)

// // Functional Instantiation with Shared Methods
// const animalMethods = {
//     eat: function(amount){
//         console.log(`${this.name} has eaten ${amount}`);
//         this.energy += amount;
//     },

//     sleep: function(length){
//         console.log(`${this.name} is sleeping for ${length}`)
//         this.energy += length
//     },

//     play: function(length){
//         console.log(`${this.name} is playing for ${length}`)
//         this.energy -= length
//     }
// }

// function Animal(name, energy){
//     let animal = {}
//     animal.name = name
//     animal.energy = energy

//     animal.eat = animalMethods.eat

//     animal.sleep = animalMethods.sleep

//     animal.play = animalMethods.play

//     return animal
// }

// const buddy = Animal('Buddy', 10);
// const snoopy = Animal('Snoopy', 15);

// console.log(buddy);
// console.log(snoopy);

// // Object.create()
// const parent = {
//     name: 'Laurie',
//     age: 60,
//     heritage: 'Irish'
// }

// let child = Object.create(parent);
// child.name = 'Brian'
// child.age = 27
// console.log(child)

// // Functional Instantiation with Object.create
// const animalMethods = {
//     eat: function(amount){
//         console.log(`${this.name} has eaten ${amount}`);
//         this.energy += amount;
//     },

//     sleep: function(length){
//         console.log(`${this.name} is sleeping for ${length}`)
//         this.energy += length
//     },

//     play: function(length){
//         console.log(`${this.name} is playing for ${length}`)
//         this.energy -= length
//     }
// }

// function Animal(name, energy){
//     let animal = Object.create(animalMethods)
//     animal.name = name
//     animal.energy = energy

//     return animal
// }

// const buddy = Animal('Buddy', 10);
// const snoopy = Animal('Snoopy', 15);

// console.log(buddy);
// console.log(snoopy);


// // JavaScript Prototype
// function myFunc(){};
// console.log(myFunc.prototype);


// // PROTOTYPAL INSTANTIATION

// function Animal(name, energy){
//     let animal = Object.create(Animal.prototype)
//     animal.name = name
//     animal.energy = energy

//     return animal
// }

// Animal.prototype.eat = function(amount){
//     console.log(`${this.name} has eaten ${amount}`);
//     this.energy += amount;
// }

// Animal.prototype.sleep = function(length){
//     console.log(`${this.name} is sleeping for ${length}`)
//     this.energy += length
// }

// Animal.prototype.play = function(length){
//     console.log(`${this.name} is playing for ${length}`)
//     this.energy -= length
// }

// const buddy = Animal('Buddy', 10);
// const snoopy = Animal('Snoopy', 15);

// console.log(buddy);
// console.log(snoopy);


// Protypal Instantiation with NEW keyword
// Pseudoclassical Instantiation

// function Animal(name, energy){
//     // let animal = Object.create(Animal.prototype)
//     this.name = name
//     this.energy = energy

//     // return animal
// }

// Animal.prototype.eat = function(amount){
//     console.log(`${this.name} has eaten ${amount}`);
//     this.energy += amount;
// }

// Animal.prototype.sleep = function(length){
//     console.log(`${this.name} is sleeping for ${length}`)
//     this.energy += length
// }

// Animal.prototype.play = function(length){
//     console.log(`${this.name} is playing for ${length}`)
//     this.energy -= length
// }

// const buddy = new Animal('Buddy', 10);
// const snoopy = new Animal('Snoopy', 15);

// console.log(buddy);
// console.log(snoopy);


// Building Objects with the CLASS keyword

class Animal {
    constructor(name, energy){
        this.name = name
        this.energy = energy
    }

    eat(amount){
        console.log(`${this.name} has eaten ${amount}`);
        this.energy += amount;
    }

    sleep(length){
        console.log(`${this.name} is sleeping for ${length}`);
        this.energy += length;
    }

    play(length){
        console.log(`${this.name} is playing for ${length}`);
        this.energy -= length;
    }
}

const buddy = new Animal('Buddy', 10);
const snoopy = new Animal('Snoopy', 15);

console.log(buddy);
console.log(snoopy);


// JavaScript Object Inheritance

class Human{
    // Constructor method
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}

const wilma = new Human('Wilma', 25, 'Female');
const fred = new Human('Fred', 25, 'Male');

// Inheritance of classes -- EXTENDS keyword
class Baby extends Human {
    constructor(name, age, gender, squishyHead){
        super(name, age, gender)
        this.squishyHead = squishyHead
    }
    crawl(){
        console.log(`${this.name} is crawling`)
    }
}


const bambam = new Baby('Bam-Bam', 1, 'Male', true);
console.log(bambam);