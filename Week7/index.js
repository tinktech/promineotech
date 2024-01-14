/*
Week 7: JS4 Coding Assignment

All questions should be printed to your Browser's console using console.log()

1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        - Do not use numbers to reference the last element, find it programmatically.
        - ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.

2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

3. How do you access the last element of any array?

4. How do you access the first element of any array?

5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and
 add the length of each name to the nameLengths array.
    For example:
        let names = ["Kelly", "Sam", "Kate"];    // starting with this array
        let nameLengths = [5, 3, 4];             // create a new array

6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated
 to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full
 name should be the first and the last name separated by a space.

9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is
 greater than 100.

10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first
 array is greater than the average of the elements in the second array.

12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
 and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log(`1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`);
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(`ages array: [${ages}]`); // prints ages array
// a. Subtract first value from last
console.log(`1.a Programmatically subtract the value of the first element in the array from the value in the last element of the array.`);
console.log(`First value subtracted from last: ${ages[(ages.length - 1)] - ages[0]}`); // prints last value subtracted from first
// b. Add new age, subtract first from last again
console.log(`1.b Add a new age to your array and repeat the step above to ensure it is dynamic.`);
ages.push(38); // adds 38 to array
console.log(`ages array: [${ages}]`); // prints modified array
console.log(`First value subtracted from last: ${ages[(ages.length - 1)] - ages[0]}`); // prints last value subtracted from first
// c. Loop, calculate average age
console.log(`1.c Use a loop to iterate through the array and calculate the average age.`);
let aSum = 0;
for (let i = 0; i < ages.length; i++) {
    aSum += ages[i];
}
let aAverage = (aSum / ages.length);
console.log(`Average age: ${aAverage}`); // prints average age of ages array
console.log(``); // console space

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
console.log(`2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`);
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(`names array: [${names}]`); // prints names array
// a. Loop, calculate average number of letters per name
console.log(`2.a Use a loop to iterate through the array and calculate the average number of letters per name.`);
let nSum = 0;
for (let i = 0; i < names.length; i++) {
    nSum += names[i].length;
}
let nAverage = (nSum / names.length);
console.log(`Average number of letters per name: ${nAverage}`); // prints average number of letters per name
// b. Loop, concatenate all names together with spaces
console.log(`2.b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);
let namesCon = '';
for (let i = 0; i < names.length; i++) {
    namesCon += (`${names[i]} `);
}
console.log(`Names concatenated with spaces: ${namesCon}`); // prints all names from array with spaces between them
console.log(``); // console space

// 3. How do you access the last element of any array?
console.log(`3. How do you access the last element of any array?`);
console.log(`Last element of an array can be accessed using: (array.length - 1)`);
console.log(``); // console space

// 4. How do you access the first element of any array?
console.log(`4. How do you access the first element of any array?`);
console.log(`First element of an array can be accessed using: array[0]`);
console.log(``); // console space

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log(`5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`);
let nameLengths = []; // empty array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(`nameLengths array: [${nameLengths}]`); // prints new array elements
console.log(``); // console space

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log(`6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);
let nameLengthsSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i];
}
console.log(`Sum of nameLengths elements = ${nameLengthsSum}`); // prints the sum of all array elements
console.log(``); // console space

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
console.log(`7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.`);
let eight = (word, n) => {
    let eightCon = '';
    for (let i = 0; i < n; i++){
        eightCon += (word);
    }
    return eightCon;
}
console.log(`word^n: ${eight('hello', 5)}`); // returns hellohellohellohellohello
console.log(``); // console space

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name, separated by a space.
console.log(`8. Write a function that takes two parameters, firstName and lastName, and returns a full name, separated by a space.`);
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(`fullName: ${fullName('Tori', 'Daye')}`); // prints fullName
console.log(``); // console space

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log(`9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);
let arrayOne = [3, 9, 23, 64, 2, 8, 28, 93];
let arrayTwo = [3, 9, 23, 64];
let arrayFun = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if (sum > 100) {
        arraySum = true;
    } else {
        arraySum = false;
    }
    return arraySum;
}
console.log(`arrayOne [${arrayOne}] returns: ${arrayFun(arrayOne)}`); // prints true
console.log(`arrayTwo [${arrayTwo}] returns: ${arrayFun(arrayTwo)}`); // prints false
console.log(``); // console space

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log(`10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`);
let average = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(`The number average for arrayOne [${arrayOne}] is: ${average(arrayOne)}`); // prints the number average for arrayOne
console.log(``); // console space

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log(`11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`);
let compAv = (arr1, arr2) => {
    let compAvBoo = '';
    if (average(arr1) > average(arr2)) {
        compAvBoo = true;
    } else {
        compAvBoo = false;
    }
    return compAvBoo
}
console.log(`arrayOne > arrayTwo? ${compAv(arrayOne, arrayTwo)}`); // prints true
console.log(`arrayTwo > arrayOne? ${compAv(arrayTwo, arrayOne)}`); // prints false
console.log(``); // console space

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log(`12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);
let willBuyDrink = (isHotOutside, moneyInPocket) => {
    let buyDrink = false;
    if (isHotOutside == true && moneyInPocket > 10.50) {
        buyDrink = true;
    } else {
        buyDrink = false;
    }
    return buyDrink;
}
console.log(`It is hot, with $11: ${willBuyDrink(true, 11)}`); // prints true
console.log(`It is not hot, with $11: ${willBuyDrink(false, 11)}`); // prints false
console.log(`It is hot, with $10: ${willBuyDrink(true, 10)}`); // prints false
console.log(``); // console space

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log(`13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`);
console.log(`I will be calculating the area of a pizza, given the diameter.`)
const pi = 3.14159; // value of pi
let pizzaArea = (d) => {
    r = d / 2; // convert diameter to radius
    a = pi * (r * r); // calculating area
    return a; // returning area
}
console.log(`The area of a 14" pizza is: ${pizzaArea(14)} square inches`); // returns the area of your pizza given the diameter
console.log(`The area of a 16" pizza is: ${pizzaArea(16)} square inches`);