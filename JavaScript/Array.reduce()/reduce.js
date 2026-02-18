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

/*
function findProducts(){
    const result = numbers.reduce((accumulator, currentValue) =>{
        return accumulator * currentValue;
    }, 1);
    return result;
}
const numbers = [2, 3, 4]
console.log(findProducts());*/

/*
Count Total Characters in All Words
Find total number of characters in the array.
Input:  ["hi", "welcome", "js"]
Output: 11
*/

/*
function countCharacters(){
    const count = arr.reduce((acc, currentElement) => {
        return acc + currentElement.length;
    }, 0);
    return count;
};


const arr = ["hi", "welcome", "js"];
console.log(countCharacters(arr));*/

/*
Convert Array into Comma Separated String (Without join)
Use reduce() to convert array to string.
Input:  ["React", "Node", "Mongo"]
Output: "React,Node,Mongo"

💡 Hint: accumulator should be a string.
*/

/*
const arr = ["React", "Node", "Mongo"];

function arrayToString(){
    const result = arr.reduce((accumulator, currentValue) =>{
        if(accumulator == ""){
            return currentValue;
        } else{
            return accumulator + ',' + currentValue;
        }
    }, "");
    return result;
}
console.log(arrayToString(arr));
*/

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

/*
const arr = [1,2,3,4,5,6]

function evenOdd(){
    const result = arr.reduce((accumulator, currentValue) =>{
        if(currentValue % 2 == 0){
            accumulator.even = accumulator.even + 1;
        } else{
            accumulator.odd = accumulator.odd + 1;
        }
        return accumulator;
    }, {even:0, odd: 0}); 
    return result;
}

console.log(evenOdd(arr));
*/
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
/*
const arr = ["hi", "hello", "js", "reduce"];

function groupWordLength() {
  const result = arr.reduce((accumulator, currentWord) => {
    const length = currentWord.length;

    if (accumulator[length] === undefined) {
      accumulator[length] = [];
    }
    accumulator[length].push(currentWord);
    return accumulator;
  }, {});
  return result;
}
console.log(groupWordLength(arr));
*/

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

/*
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
*/

/*
Flatten Array Without Using flat()
Input: [[1,2], [3,4], [5,6]]

Output: [1,2,3,4,5,6]
*/

/*
const numbers = [1, 2, 3, 4, 5, 6];
function flattenArray() {
  const result = numbers.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
  }, []);
  return result;
}
console.log(flattenArray(numbers));
*/

/* 
 Find Second Largest Number
Do NOT sort.
Input: [10, 5, 8, 20, 15]

Output: 15

*/

/* 
const numbers = [10, 5, 8, 20, 15]

function findSecondLargest(){
    const result = numbers.reduce((accumulator, currentValue) => {
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
console.log(findSecondLargest(numbers));

*/

