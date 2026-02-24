// Higher Order Functions (Without map/filter/reduce)
// 13/2/2026
/* 
Q1. Print All Elements Using forEach
Write a program to print each element of the array using forEach.
Input: [10, 20, 30, 40]
Output:
Element is 10
Element is 20
Element is 30
Element is 40

💡 Hint: forEach is used when we just want to iterate (like a loop).
*/
console.log("**********Print All Elements Using forEach*********");
const arr = [10, 20, 30, 40];
function printElements() {
  arr.forEach((element) => {
    console.log("Element is ", element);
  });
}
printElements();

/*
Print Index + Value
Using forEach, print both index and value.
Input: ["apple", "banana", "mango"]

Output:
0 -> apple
1 -> banana
2 -> mango

💡 Hint: forEach((value, index) => {})
*/
console.log("**********Print Index + Value**********");
const fruits = ["apple", "banana", "mango"];
function printIndexValue() {
  fruits.forEach((value, index) => {
    console.log(index + " -> " + value);
  });
}
printIndexValue(fruits);

/*
Check if Array Contains a Negative Number (some)
Write a function to check whether the array contains any negative number.
Input: [2, 5, -1, 9]
Output: true

💡 Hint: some() stops when condition becomes true.

*/
console.log("*********Negative Number (some)****************");
const arr2 = [2, 5, -1, 9];
function findNegativeNumber() {
  return arr2.some((num) => num < 0);
}
console.log(findNegativeNumber(arr2));

// const arr = [2, 5, -1, 9];
// function findNegativeNumber(arr){
//     return arr.some(negativeNumber =>{
//         return negativeNumber < 0;
//     });
// };
// console.log(findNegativeNumber(arr));

/*
Check if All Students Passed (every)
Check whether all students scored more than 35.
Input: [78, 55, 90, 34, 88]
Output: false

💡 Hint: every() returns true only if ALL pass condition.
*/
console.log("*********Check if All Students Passed****************");
const arr3 = [78, 55, 90, 34, 88];

function passedStudents() {
  return arr3.every((score) => {
    return score > 35;
  });
}
console.log(passedStudents(arr3));

/*
Find First Even Number (find)
Find the first even number from the array.
Input: [1, 7, 9, 4, 6]
Output: 4

💡 Hint: find() returns ONLY the first match.
*/

console.log("*********Find First Even Number (find)***************");
const arr4 = [1, 7, 9, 4, 6];

function findEvenNumber() {
  return arr4.find((num) => num % 2 === 0);
}
console.log(findEvenNumber(arr4));

/*
Find a User Object by ID
Find the user whose id is 3.
Input:
[
 {id:1, name:"Anil"},
 {id:2, name:"Neha"},
 {id:3, name:"Rahul"}
]

Output:
{id:3, name:"Rahul"}

💡 Hint: Real-world usage of find().
*/

console.log("*********Find a User Object by ID***************");
const arr5 = [
  { id: 1, name: "Anil" },
  { id: 2, name: "Neha" },
  { id: 3, name: "Rahul" },
];

function objectFind(arr, id) {
  return arr5.find((user) => user.id === id);
}

console.log(objectFind(arr5, 3));

/*
Sort Numbers in Ascending Order (sort)
Sort the numbers properly (not alphabetically).
Input: [100, 5, 25, 8]
Output: [5, 8, 25, 100]

💡 Hint: Must use compare function (a,b)=>a-b.

*/
console.log("*********Sort Numbers in Ascending Order (sort)***************");

const arr6 = [100, 5, 25, 8];

function sortNumber(arr) {
  return arr6.sort((a, b) => a - b);
}
console.log(sortNumber(arr6));

/*
Sort Objects Based on Salary
Sort employees by salary (low → high).
Input:
[
 {name:"A", salary:50000},
 {name:"B", salary:30000},
 {name:"C", salary:70000}
]

Output:
[
 {name:"B", salary:30000},
 {name:"A", salary:50000},
 {name:"C", salary:70000}
]

💡 Hint: Custom comparator inside sort().
*/
console.log("*********Sort Objects Based on Salary***************");

const arr7 = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 30000 },
  { name: "C", salary: 70000 },
];

// function sortArray(arr7){
//     return arr7.sort((a,b)=> a.salary - b.salary);
// }
// console.log(sortArray(arr7));

const result = arr7.sort((a, b) => a.salary - b.salary);
console.log(result);

/*

Check If Any Product is Out of Stock
Return true if ANY product has stock = 0.
Input:
[
 {name:"Laptop", stock:5},
 {name:"Mouse", stock:0},
 {name:"Keyboard", stock:10}
]

Output: true

💡 Hint: Combine object access with some().

*/

console.log("*********Out of Stock***************");

const productsArray = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 10 },
];

function anyProductOutOfStock(productsArray) {
  return productsArray.some((product) => product.stock == 0);
}
console.log(anyProductOutOfStock(productsArray));

/*
Flatten Nested Array Using flat
Convert nested array into single array.
Input: [1, 2, [3, 4], [5, 6]]
Output: [1, 2, 3, 4, 5, 6]

💡 Hint: Use flat() (do not use map/filter/reduce).
*/
console.log("*********Flatten Nested Array Using flat***************");

// const arr = [1, 2, [3, 4], [5, 6]]

// const result = arr.flat();

// console.log(result)

const arr8 = [1, 2, [3, 4], [5, 6]];
function flatArray(arr) {
  return arr8.flat();
}
console.log(flatArray(arr8));
