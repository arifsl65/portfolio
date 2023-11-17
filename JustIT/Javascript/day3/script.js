// Arrays & Loops:

// Learning Objectives:

// - To understand what an array is.
// - To explore how arrays can be used.
// - To make use of array methods.
// - To explore loops and integrate them into your code.

let coffeeOrder = [
    "James - Americano",
    "Hannah - Frappuccino",
    "Alex - Latte"
];

console.log(coffeeOrder);

// Accessing an array item via bracket notation

// REMEMBER Javascript counts from 0 so the first item will sit at index 0
console.log(coffeeOrder[2]);

// console.table is an alternate method of outputting data to the console
console.table(coffeeOrder);

// Can use bracket notation to assign new values to items or delcare undefined items in the array
coffeeOrder[1] = "Hannah - Tea";
// coffeeOrder[3] = "New Array Item";
// console.log(coffeeOrder[3]);
console.log(coffeeOrder);

// Array Property
console.log(coffeeOrder.length);

// Array Methods

// array.push() - adds to the end of the array
coffeeOrder.push("Christian - Water");
console.log(coffeeOrder);

// array.pop() - removes from the end of array
coffeeOrder.pop();
console.log(coffeeOrder);

// array.splice() - Can be used to add, remove and/or replace items
let array = [1, 2, 3, 4];
console.log(array);

// Using splice to remove items
// pass the starting index and the number of items to remove
// array.splice(2, 2);
// console.log(array);

// pass the stating index, how many items to remove, new items to add
array.splice(0, 2, "Five", "Six");
console.log(array);
// console.log(array);

// Loops:

let colours = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Black",
    "Purple",
    "Pink",
    "Brown"
]

console.log(colours);

// Increment Operator - ++

// Adds 1 to the value of the data it is passed to

//  ++a is prefix
//  a++ is postfix

let a = 1;
let b = a++;

// console.log(a);
// console.log(b);

// For Loop
for (let i = 0; i < colours.length; i++) {
    console.log(`index is currently ${i}`);
    console.log(colours[i]);
}

// For Loop Example 2
let multiplesTwo = [];

// for (let i = 1; i < 21; i++) {
//     if (i % 2 === 0) {
//         multiplesTwo.push(i);
//     }
// }

console.log(multiplesTwo);

// While Loop

// Be sure that your loop conditions will always be met eventually
// Otherwise infinite loops may occur.
let number = 0;

// while (number < 10) {
//     console.log(number);
//     number++;
// }


// While Loop Example 2

let cards = ["Hearts", "Clubs", "Diamonds", "Spades"];
let currentSuit = "Clubs";

while (currentSuit !== "Spades") {
    console.log(currentSuit);
    currentSuit = cards[Math.floor(Math.random() * 4)];
}

console.log("GAME OVER - YOU DREW Spades!");

// Do While Loop

// Similar to a while loop however will always run at least once
// as it runs first then evaluates the condition
let num = 5;

do {
    console.log(num);
} while (num < 1);



// JavaScript - Day 3 Tasks:
//  
// 1: Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Then using a loop, cycle through the array and log each item to the console.
//  
// 2: Use a loop to generate 10 random numbers between 1-100 and log them to the console.
//  
// 3: Use a loop to count backwards from 20-0 logging each number to the console.
//  
// 4: Use a loop to generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible or not to the console.
//  
// 5: Research a for of loop and put together a working example.




let movies = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    
]


movies.push("Water" , "air");

for (let i=0 ;i<movies.length;i++){
    console.log(`Movie name ${i} > ${movies[i]}`);
}


for (i=1 ;i<10;i++){

    let randomnum = Math.floor(Math.random()*100);
    console.log(randomnum)
}



for (i=0 ;i<5;i++){

    let randomnum = Math.floor(Math.random()*50);
    divisibleFive = (randomnum%5=== 0);
    console.log(divisibleFive);
}


















