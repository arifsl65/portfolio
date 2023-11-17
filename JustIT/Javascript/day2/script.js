// Conditional Statements in JavaScript

// Equal To - Comparison Operator - "=="

// Checks the value of data on the left and checks if it is equal to the data on the right. 
let a = 10;

console.log(a == 10);

// Weather Example If / Else

// IF Statement

// let weather = "Rain";

// if (weather == "Sunny") {
//     console.log("Bring your sunglasses!");
// }

// IF / Else

// let weather = "Snow";

// if (weather == "Sunny") {
//     console.log("Bring your sunglasses!");
// } else {
//     console.log("It doesn't look Sunny to me!");
// }

// console.log("After conditional statement");

// IF / Else IF / Else

let weather = "Snow";

if (weather == "Sunny") {
    console.log("Bring your sunglasses!");
} else if (weather == "Rain") {
    console.log("Grab an umbrella!");
} else if (weather == "Snow") {
    console.log("Go and build a snowman!");
} else {
    console.log("I'm not too sure.");
}

console.log("After conditional statement");

// Comparison Operators

// Stictly Equal To Operator - ===

console.log(100 == "100");

//  == - Equal to

//  === - Equal Value and Equal Data Type

//  != - Not Equal to

//  !== - Not Equal Value and Equal Data Type

//   > - Greater Than

//   < - Less Than

//  >= - Greater than or equal to

//  <= - Less than or equal to

// Logical Operators:

// || - Logical or "The Pipe"

// && - Logical and

// ! - not

// Traffic Light - If/Else / Logical "or" Example

let traficLight = "Green";

if (traficLight === "Red" || traficLight === "Amber") {
    console.log("Stop!");
} else {
    console.log("Go!");
}

// Refactored Traffic Light Conditional Check

if (traficLight !== "Green") {
    console.log("Stop!");
} else {
    console.log("Go!");
}

// Logical and example
let number = 8;

if (number > 5 && number < 10) {
    console.log(`${number} IS between 5 and 10.`);
} else {
    console.log(`${number} is NOT between 5 and 10.`);
}

// Switch Statement
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Weekend is over! Happy Monday!")
        break;
    case "Tuesday":
        console.log("Second day of the week!")
        break;
    case "Wednesday":
        console.log("Halfway through the week!")
        break;
    case "Thursday":
        console.log("It's almost Friday!")
        break;
    case "Friday":
        console.log("Happy Friday!")
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the Weekend!")
        break;
    default:
        console.log("Day not recognised. Try again.");
};

// Switch Statement - Grade Example
let testScore = 80;

switch (true) {
    case testScore >= 70:
        console.log("Distinction")
        break;
    case testScore >= 60:
        console.log("Merit")
        break;
    case testScore >= 50:
        console.log("Pass")
        break;
    default:
        console.log("Fail");
}

// This will show a pop-up dialog box with an input field
//var userInput = prompt("Enter something:");

// Display the user input
//console.log("You entered: " + userInput);

//Write a conditional statement to check whether a customer is old enough to be served alcohol at a bar. Check the value of a variable named "age" and if the value of "age" is 18 or above, log a message to the console asking what the customer would like. If the value of "age" is below 18, log a message to the console advising that they are too young.

let age = 23;

if(age <= 18){
console.log("Sorry you are not allowed");
}
else{
console.log("What drink would you like");
}

let getnumber = 43

if((getnumber%2)=== 0)
{ 
    console.log("your have entered an even number");

} else 
{
    console.log("your have entered an odd number");

}

let fiveorthree = 15 

if (((fiveorthree%3)=== 0) || ((fiveorthree%5)=== 0))
{ 
    console.log(" its divisible by 3 or 5 ");

} else 
{
    console.log("its not divisible by 3 or 5 ");

}


let newnumber = 25

if ( (newnumber % 3===0) && (newnumber % 5 !== 0 ))
{ 
    console.log("Fizz");

} else if((newnumber % 5 ===0)  && (newnumber % 3 !== 0 ))
{
    console.log("Buzz");

} else if  (((newnumber%3)=== 0) && ((newnumber%5)=== 0))

{
    console.log(" Fizz Buzz");

} else {
    console.log(newnumber);
}

// palindrome

let num = 70008;
originalnumber = num
let digit =0 ;
let reverseNum =0;
while (num>0){
    digit = num % 10 ;
    reverseNum = reverseNum * 10 + digit ;
    num = Math.floor(num/10)
}

if (reverseNum === originalnumber){

console.log("its palindrome", reverseNum);

} else {
    console.log("Its not palindrome");
}



