// 1. Write a JavaScript program that calculates the total price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. Print the result in the console.
// formula: sales tax = purchase price x sales tax rate

const purchasePrice = 119.95;
const taxRate = 5;

const salesTax = (purchasePrice * taxRate);

console.log("Total price after tax: ", salesTax);


// 2. Write a JavaScript program that takes minutes and converts them to seconds. Print the result in the console.
//formula : minuti puta 60

const sec = 60
const min = 3

const result = (min * sec)

console.log("The minutes input is: " , result , "in seconds");


// 3. Write a JavaScript program that takes a number and increments the number by +1 and prints the result in the console.
// i++

let num = 24;
num++;
console.log("Number incremented by 1 is:" , num); 

// 4. Write a JavaScript program that takes the base and height of a triangle and calculates its area. Print the result in the console.
// formula (base * height) / 2 

const base = 4;
const height = 6;

const areaOfTriangle = (base * height) / 2;
console.log("The area of the triangle is: " , areaOfTriangle);

// 5. Write a JavaScript program that takes length and width of a rectangle and finds its perimeter. Print the result in the console.
// formula e length + width i gi mnozime po 2 (poso logicno gi ima po 2 pati na rectangle)

const length = 10;
const width = 5;

const perimeter = (length + width) * 2;

console.log("The perimeter of the rectangle is: " , perimeter);

// 6. Write a JavaScript program that will calculate area of circle. Print the result in the console
// formula A=(radius + pi) na kvadrat

const radius = 11;
const pi = 3.14;

const areaOfCircle = pi * radius * radius;

console.log("The area of the circle is: " , areaOfCircle);