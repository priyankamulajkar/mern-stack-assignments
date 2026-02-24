// 13/2/2026
// Assignment Array.reduce()

/*
1. Find Product of All Numbers
Write a function using reduce() to multiply all numbers in an array.
Input:  [2, 3, 4]
Output: 24*/

// function findProducts(numbers){
//     const result = numbers.reduce(function(accumulator, currentValue){
//         return accumulator * currentValue;
//     }, 1);
//     return result;
// }
// const numbers = [2, 3, 4]
// console.log(findProducts(numbers))

console.log(
  "*******************Find Product of All Numbers******************************",
);
function findProducts() {
  const result = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
  return result;
}
const numbers = [2, 3, 4];
console.log(findProducts());

/*
Count Total Characters in All Words
Find total number of characters in the array.
Input:  ["hi", "welcome", "js"]
Output: 11
*/

console.log(
  "*******************Count Total Characters in All Words**********************",
);
function countCharacters(arr) {
  const count = arr.reduce((acc, currentElement) => {
    return acc + currentElement.length;
  }, 0);
  return count;
}

const arr = ["hi", "welcome", "js"];
console.log(countCharacters(arr));

/*
Convert Array into Comma Separated String (Without join)
Use reduce() to convert array to string.
Input:  ["React", "Node", "Mongo"]
Output: "React,Node,Mongo"

💡 Hint: accumulator should be a string.
*/

console.log(
  "*******************Convert Array into Comma Separated String**********************"
);
const arr2 = ["React", "Node", "Mongo"];

function arrayToString(){
    const result = arr2.reduce((accumulator, currentValue) =>{
        if(accumulator == ""){
            return currentValue;
        } else{
            return accumulator + ',' + currentValue;
        }
    }, "");
    return result;
}
console.log(arrayToString(arr2));


/*
Count Even and Odd Numbers
Return count of even and odd numbers.
Input:  [1,2,3,4,5,6]

Output:
{
  even: 3,
  odd: 3
}
*/


console.log(
  "*******************Count Even and Odd Numbers**********************",
);
const arr3 = [1,2,3,4,5,6]

function evenOdd(){
    const result = arr3.reduce((accumulator, currentValue) =>{
        if(currentValue % 2 == 0){
            accumulator.even = accumulator.even + 1;
        } else{
            accumulator.odd = accumulator.odd + 1;
        }
        return accumulator;
    }, {even:0, odd: 0}); 
    return result;
}

console.log(evenOdd(arr3));

/*
Create Map of Word Lengths
Group words based on their length.
Input: ["hi", "hello", "js", "reduce"]

Output:
{
  2: ["hi","js"],
  5: ["hello"],
  6: ["reduce"]
}

💡 Hint: key will be word.length.*/

console.log(
  "*******************Create Map of Word Lengths**********************"
);

const arr4 = ["hi", "hello", "js", "reduce"];

function groupWordLength() {
  const result = arr4.reduce((accumulator, currentWord) => {
    const length = currentWord.length;

    if (accumulator[length] === undefined) {
      accumulator[length] = [];
    }
    accumulator[length].push(currentWord);
    return accumulator;
  }, {});
  return result;
}
console.log(groupWordLength(arr4));


/*
Find Total Price of Cart
Calculate total cart value.
const cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 200, qty: 3 }
];

Output: 3100
*/

console.log(
  "*******************Find Total Price of Cart**********************"
);

const cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 200, qty: 3 }
];

function totalPriceCart(){
    const result = cart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.qty);
    }, 0);
    return result;
}
console.log(totalPriceCart(cart));

/*
Flatten Array Without Using flat()
Input: [[1,2], [3,4], [5,6]]

Output: [1,2,3,4,5,6]
*/

console.log(
  "*******************Flatten Array Without Using flat()**********************"
);
const numbers2 = [1, 2, 3, 4, 5, 6];
function flattenArray() {
  const result = numbers2.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
  }, []);
  return result;
}
console.log(flattenArray(numbers2));


/* 
 Find Second Largest Number
Do NOT sort.
Input: [10, 5, 8, 20, 15]

Output: 15

*/

console.log(
  "*******************Find Second Largest Number**********************"
);
const numbers3 = [10, 5, 8, 20, 15]

function findSecondLargest(){
    const result = numbers3.reduce((accumulator, currentValue) => {
        if(currentValue > accumulator.max){
            accumulator.second = accumulator.max;
            accumulator.max = currentValue;
        } else if(currentValue > accumulator.second && currentValue !== accumulator.max){
            accumulator.second = currentValue;
        }
        return accumulator;
    }, {max: -Infinity, second: -Infinity});
    return result.second;
}
console.log(findSecondLargest(numbers3));

/*
 Build a Real “Group By + Count” Dashboard
Count how many employees exist in each department.
const employees = [
 { name:"A", dept:"IT" },
 { name:"B", dept:"HR" },
 { name:"C", dept:"IT" },
 { name:"D", dept:"Finance" },
 { name:"E", dept:"HR" }
];

Output:
{
 IT: { count:2, employees:["A","C"] },
 HR: { count:2, employees:["B","E"] },
 Finance: { count:1, employees:["D"] }
}
*/
console.log(
  "******************Build a Real “Group By + Count” Dashboard**********************"
);

const employees = [
 { name:"A", dept:"IT" },
 { name:"B", dept:"HR" },
 { name:"C", dept:"IT" },
 { name:"D", dept:"Finance" },
 { name:"E", dept:"HR" }
];

const result = employees.reduce((accumulator, currentElement) =>{
    const dept = currentElement.dept;

    // if dept not created create it 
     if (!accumulator[dept]) {
        accumulator[dept] = {
            count: 0,
            employees: []
        };
    }
        accumulator[dept].count++;
        accumulator[dept].employees.push(currentElement.name);

        return accumulator;
}, {});
console.log(result)


