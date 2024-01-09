/* Arrays

var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}

for (name of customerNames) {
    console.log(name);
}


let gradesArray = new Array(5);
let gradesArray = [100, 79, 80, 90, 100];
let gradesArray = new Array(100, 79, 80, 90, 100);


let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100];
let counter = 1;

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let grade of gradesArray) {
console.log((counter++) + ": " + grade);
}

// Now Add Another Grade
gradesArray.push(85);
// Reset the counter to 1;
counter = 1;
console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let grade of gradesArray) {
console.log((counter++) + ": " + grade);
}
*/

/* Functions

function myFunction() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}
myFunction();


function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
createFullName('Tom', 'Sawyer');


let fullName = "Mary" + " " + "Brown"; 
let gradesArray = [100, 79, 80, 90, 100];

function lowestGrade (gradeBook) {
    if (gradeBook.length > 0) {
        let lowGrade=gradeBook[0];
        for (let grade of gradeBook) {
            if (grade < lowGrade) {
                lowGrade = grade;
            }
        }
        return lowGrade;
    } else {
        return 0;
    }
}
console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) { 
    console.log("\t" + (i+1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");
console.log("\tLowest Grade is: " + lowestGrade(gradesArray));
*/

/* Coding Challenges:  
- Write a function that calculates and returns the square of a number, which is passed in as a parameter.
This function will take one parameter, and return that parameter multiplied by itself.

- Write a function that raises a number x to the power y, and returns the result.
This function will take two parameters, x and y, and return the result.
*/



/* Objects

var contactOne = {
    firstName:"Mickey",
    lastName: "Mouse",
    address: {
        street: "1 Main Street",
        city: "Disneyland",
        state: "CA",
        zip: "92802"
    },
    phone: "123-456-7890",
    notes: ""
};

console.log(contactOne.firstName + " " + contactOne.lastName 
    +  " lives in " + contactOne.address.city + " " 
    + contactOne.address.state);
*/

/*
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printArray(input);
*/

console.log("hello") 