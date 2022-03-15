
// TAKSK 1
const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}

const greet = (time, fn) => {
    if(time < 1200) {
        fn("Morning");
    } else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    } else {
        fn("Evening");
    }
}

greet(1900, whichGreeting);

// TASK 2

// const add = () => {
//     return 2 + 3;
// }

// console.log(add());
// console.log(add);


// const thisFunction = () => {
//     return "Booya";
// }

// const add = (example) => {
//     add2(example);
// }

// const add2 = (example) => {
//     example();
// }

// add(thisFunction);

// TASK 3

// const add = (num1) => {
//     return (num2) => {
//         return num1 + num2;
//     }
// } 

// console.log(add(2, 6));


// let myArray = [
//     [1, 2, 3, 4, 5], 
//     [6, 7, 8, 9, 10], 
//     [11, 12, 13, 14, {name: "Holly"}]
// ];

// console.log(myArray[2][3]);


// ACTIVITY 1

const loopFunction = () => {
    for (let i = 0; 1 < 5; i++){
        simpleFunction();
    }
}

const simpleFunction = () => {
    console.log("Hello Code Nation");
}

// ACTIVITY 2
// Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3.

let myArray = [7, 2, 9, 4, 99]; 
let myMappedArray = myArray.map(x => x * 3);

// console.log(myArray);
console.log(myMappedArray);


// ACTIVITY 3

const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a /b;
};
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
};
console.log(doMaths(767)(3, add));