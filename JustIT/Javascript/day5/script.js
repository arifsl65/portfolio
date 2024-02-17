// // Objects

// // Learning Objectives: 
// // - Explore the concept of an Object
// // - To access data from within an object
// // - To use methods (functions inside objects) with Objects

// // properties = data contained within the object
// // methods = things that the object can do

// // Objects are comprised of key:value pairs 

// const exampleObject = {
//     key1: "value1",
//     key2: 2
// };

// // Object Example

// const coffeeShop = {
//     name: "Costa",
//     branchNumber: 250,
//     specialOffers: true,
//     drinks: [
//         "Americano",
//         "Latte",
//         "Tea"
//     ],
//     close: function () {
//         return `This ${this.name} is closed. Come back tomorrow.`
//     }
// };

// console.log(coffeeShop);

// // Access Object Properties with dot notation
// console.log(coffeeShop.name);

// // Access array items by referencing the relevant index with bracket notation
// console.log(coffeeShop.drinks[2]);

// // Bracket vs Dot notation
// console.log(coffeeShop.name);

// console.log(coffeeShop["name"]);

// // Add a new property to an Object
// coffeeShop.muffins = ["Blueberry", "Chocolate"];

// // Change or update the value of a property
// coffeeShop.branchNumber = 100;

// // Add data to the object
// coffeeShop.breakfastOffer = "Free bagel with any coffee.";
// coffeeShop.lunchOffer = "Free coffee with any sandwich.";

// let offer = "No current offer";
// let time = 1700;

// if (time < 1100) {
//     offer = coffeeShop.breakfastOffer;
//     console.log(offer);
// } else if (time < 1500) {
//     offer = coffeeShop.lunchOffer;
//     console.log(offer);
// }

// console.log(offer);

// // Object Methods (functions inside objects)
// console.log(coffeeShop.close());

// // Adding a method after initial declaration of the object
// coffeeShop.open = function () {
//     return `We are open come on in.`;
// }

// console.log(coffeeShop.open());
// console.log(coffeeShop);

// // Nested Objects
// const employee = {
//     id: 1,
//     name: 'John Doe',
//     position: 'Software Engineer',
//     department: {
//         name: 'Engineering',
//         location: 'Building A',
//         supervisor: {
//             name: 'Jane Smith',
//             position: 'Engineering Manager'
//         }
//     }
// };

// const library = {
//     name: 'Public Library',
//     location: 'City Center',
//     books: [
//         {
//             id: 'B001',
//             title: 'The Great Gatsby',
//             author: 'F. Scott Fitzgerald',
//             details: {
//                 genre: 'Fiction',
//                 year: 1925
//             }
//         },
//         {
//             id: 'B002',
//             title: 'To Kill a Mockingbird',
//             author: 'Harper Lee',
//             details: {
//                 genre: 'Fiction',
//                 year: 1960
//             }
//         }
//     ]
// };

// // JavaScript - Day 5 Tasks:
// //  
// // 1: Create an object called person with keys of name age and city. Once created log your object to the console.
// //  
// // 2: Without editing the original person object add a list of your favourite songs to the person object and log the list to the console.
// //  
// // 3: Create an Alarm object with a method called "checkAlarm", that takes in the day of the week as an argument and returns "Get up at 7:00am" if it is passed a weekday and "Sleep in it's the weekend" if it is passed a weekend day.
// //  
// // Nested Objects Tasks:
// //  
// // Use the nested objects at the bottom of todays reference file to complete the tasks below. Reference the requested data via the objects.
// //  
// // 1: Log the name of John's supervisor to the console.
// //  
// // 2: Log the title of 'The Great Gatsby' to the console.


// const persona = {
//     Pname:"jack",
//     Page:"23",
//     Pcity:"London",

// };

// console.log(persona);
// persona.songs=["Life long","beautiful people"];

// console.log(persona);
// console.table(persona);


// const alarmObj = {

//     time: 6,
//     day: ["mon","tue"],

//  getAlarm: function(day){

//     if (day=="sat"|| day=="sun" ){
//         console.log("sleep")
//     }else("wake")


//     }


// };

// console.log(alarmObj.getAlarm("sat"));


// console.log(employee.department.supervisor.name);

// // https://www.freecodecamp.org/news/javascript-dom/


console.log(document);

