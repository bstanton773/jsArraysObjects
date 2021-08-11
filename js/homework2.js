//============ Exercise #1 ============//
/*
Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 
Expected output
Given arr: ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
Output arr: ["even index","Baseball","even index","Goku","even index","Rodger"]
*/

const testArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for (let i=0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index');
        }
    }
    return arr
}

console.log(testArr)
console.log(replaceEvens(testArr));


console.clear()
//============ Exercise #2 ============//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person1 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Taco Bell",
    burgers:"Shake Shack",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Shamrock Shake",
        cupids_candies:"Chocolate Malt"
    }]
}


let parsePersonObject = (person) => {
    // Loop through the keys of person
    for (let i=0; i < Object.keys(person).length; i++){
        // If value of object at key[i] is an array
        if (Array.isArray(Object.values(person)[i])){
            // Loop through the array
            for (let j=0; j < Object.values(person)[i].length; j++){
                // Check if value at array[j] is an oject
                if (typeof(Object.values(person)[i][j])==='object'){
                    // Loop through the object via .keys()
                    for (let k=0; k < Object.keys(Object.values(person)[i][j]).length; k++){
                        // log the value at index k of person[i][j]
                        console.log(Object.values(Object.values(person)[i][j])[k]);
                    }
                } else {
                    console.log(Object.values(person)[i][j]);
                }
            }
        } else {
            console.log(Object.values(person)[i]);
        }
    }
}


parsePersonObject(person1);