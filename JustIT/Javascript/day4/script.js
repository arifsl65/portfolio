// Functions

// Learning Objectives:

// - To explore functions and look at how they work
// - To incorporate functions into our code
// - To recognise the different types of function syntax

// Hoisting - Calling a function before it has been declared
// greeting();

// Declare a function (Function Declaration)
function greeting() {
    console.log("Hello World");
}

// Calling / Invoking a function
// greeting();

// User Login / Log-out function
let userOnline = false;

function updateUserStatus() {
    if (userOnline) {
        userOnline = false;
        console.log("User Signed-Out");
    } else {
        userOnline = true;
        console.log("User Signed-In");
    }
}

// updateUserStatus();
// updateUserStatus();
// updateUserStatus();
// updateUserStatus();

// Parameters and Arguments

// Parameters are required values that we specify when declaring our functions
function atm(accountNumber, amount) {
    console.log(`Account Number: ${accountNumber}. Amount Withdrawn: £${amount}.00.`);
}

// Arguments are passed when we call our function to make it run appropriately
// atm(12345678, 200);


// Scope
const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
    const name = "Sarah";
    const age = 22;


    return `${name} is ${age} and lives in ${city}`;
}

// console.log(getPersonInfo());

// let day = "Thursday"

// let day = "Friday"

// var pet = "Dog";

// var pet = "Cat"

// console.log(pet);

// Nested / Inner Functions

function quadruple(num) {
    function double(num) {
        return num * 2
    }
    return double(num) * 2
}

// console.log(quadruple(4));

// Different Function Syntax

// Function Declaration
function squaredDeclaration(num) {
    return num * num;
}

// console.log(squaredDeclaration(20));


// Arrow Function - Cannot be hoisted - Must be called after declaration
// const squaredArrow = (num) => {
//     return num * num;
// };

// Arrow Function with implicit return (No need for return keyword - only on one line)
// const squaredArrowImplicit = (num) => num * num;

// console.log(squaredArrowImplicit(4));

// "Anonymous" Function
// const squaredAnon = function (num) {
//     return num * num;
// }

// console.log(squaredAnon(2));


// 1: Greeting
const personalisedGreeting = (firstName, surname) => {
    return `Hello ${firstName} ${surname}, how are you?`;
}

console.log(personalisedGreeting("Joe", "Bloggs"));

// 2: Sort in alphabetical order
function stringSort(string) {
    return string.toLowerCase().split('').sort().join('');
}

console.log(stringSort("Whatever"));

// 3: ATM

let accBal = 1000;
let storedPin = 1234;

const withdraw = (withdrawAmount, pin) => {
    if (accBal >= withdrawAmount && pin === storedPin) {
        return `Transaction Approved. Please collect your £${withdrawAmount}.00.`;
    } else if (accBal >= withdrawAmount && pin !== storedPin) {
        return `Transaction Denied. Incorrect Pin Number.`;
    } else {
        return `Transaction Denied. Insufficient Funds.`;
    }
}

console.log(withdraw(20, 1230));



// 1: Write a function that takes a first name and surname as arguments and returns a personalised greeting to the console.
 
// 2: Write a function that takes a string as an argument, sorts the string into alphabetical order and logs it to the console.
 
// 3: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as an argument and compares the pin and and withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient approve the transaction, if not decline the transaction.
 
// 4: Research Arrow Functions to identify how they differ from function declarations.


function nameGreetings(fName,sName )
{
    console.log(`hello ${fName} ${sName}  Good Afternoon`)

}

let fName = "adam";
let sName ="sand";
nameGreetings(fName,sName);


function strings(chars)
{
    charsort=chars.split("").sort();
    console.log(`${charsort}`);

}

let chars = "kejwhlasdn,mbn`,jsdbliqwhu";

strings(chars);


function  myAtm (wAmount,PnNumber){ 

   const accBal = 30000 ;
  const pinStored = 3353 ;


  if (PnNumber!==pinStored)
  {
    return`wrong pin`;
        }
   
    else if (wAmount > accBal){
        return`your balance is low`;
    } 
    
    else if(wAmount<accBal && PnNumber===pinStored){

        return`Please take your Cash`;
    } 


}

let wAmount = 1000 ;

let PnNumber = 3353 ;

myAtm(wAmount,PnNumber);




