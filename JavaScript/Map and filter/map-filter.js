// 12/2/2026
// Map and filter Assignment

/*Double the Numbers
Input
const numbers = [1, 2, 3, 4, 5];

📌 Expected Output:
 [2, 4, 6, 8, 10]
 */

console.log("*********Double the Numbers**************");

const numbers = [1, 2, 3, 4, 5];

const doubleArray = numbers.map(num => {
    return num*2;
});
console.log(doubleArray);

/*
Convert Numbers to Strings
Input
const numbers = [10, 20, 30];
📌 Expected Output:
 ["10", "20", "30"]
 */

console.log("*********Double the Numbers**************");

const numbers2 = [10, 20, 30];
// Shorter
// const convertArray = numbers2.map(num => String(num));
const convertArray = numbers2.map(num => {
    return String(num);
})
console.log(convertArray)

/*
Filter Even Numbers
Input
const numbers = [1, 2, 3, 4, 5, 6];
📌 Expected Output:
 [2, 4, 6]
  */

console.log("*********Filter Even Numbers**************");

const numbers3 = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers3.filter(num => num % 2 == 0);
const evenNumbers = numbers3.filter(num => {
    return num % 2 == 0;
});
console.log(evenNumbers)


/*
Get Positive Numbers
Positive numbers usually mean greater than 0 (so 0 is excluded).
Input
const numbers = [-5, 10, -2, 0, 15];
*/
console.log("*********Get Positive Numbers**************");

const numbers4 = [-5, 10, -2, 0, 15];

const posNum = numbers4.filter(num => num>=0);
console.log(posNum);


/*Add “Mr.” to Names
Input
const names = ["Rahul", "Amit", "Suresh"];
📌 Expected Output:
 ["Mr. Rahul", "Mr. Amit", "Mr. Suresh"]
*/
console.log("*********Add “Mr.” to Names**************");

const names = ["Rahul", "Amit", "Suresh"];

// const addName = names.map( addtitle => 'Mr. ' + addtitle);

const addName = names.map(addTitle => {
    return 'Mr ' + addTitle;
});

console.log(addName);

/*
Get Length of Each Word
Input
const words = ["apple", "banana", "kiwi"];
📌 Expected Output:
 [5, 6, 4]
*/
console.log("*********Get Length of Each Word**************");
const words = ["apple", "banana", "kiwi"];

// const wordLength = words.map(wordlen => wordlen.length);

const wordLength = words.map(word =>{
    return word.length;
})

console.log(wordLength);

/*
Filter Students Who Passed
Input
const marks = [35, 60, 42, 25, 80];
📌 Expected Output:
 [60, 42, 80]
 */

console.log("*********Filter Students Who Passed**************");

const marks = [35, 60, 42, 25, 80];
// const passedStudents = marks.filter(studentMark => studentMark > 40);

const passedStudents = marks.filter(studentMarks =>{
    return studentMarks > 40;
})
console.log(passedStudents);

/*
Square Only Even Numbers
Input
const numbers = [1, 2, 3, 4, 5];

📌 Expected Output:
 [4, 16] */
console.log("*********Square Only Even Numbers**************");

const numbers5 = [1, 2, 3, 4, 5];
SquareNumbers = numbers5.filter(num => num % 2 == 0).map(num => num ** 2);

//  SquareNumbers = numbers5.filter(num => {
//     return num % 2 == 0;
// })
// .map(num => {
//     return num ** 2;
// });

 console.log(SquareNumbers);

/*
 Convert Prices to GST-Included Prices
Input
const prices = [100, 200, 300];

Task
Add 18% GST to each price.

📌 Expected Output:
 [118, 236, 354]*/

console.log("*********Convert Prices to GST-Included Prices**************");

const prices = [100, 200, 300];

// const gstPrice = prices.map(incGst => incGst + incGst * 0.18);

const gstPrice = prices.map(incGST => {
    return incGST + incGST * 0.18;
});

console.log(gstPrice);

/*
Extract User Names
Input
const users = [
  { id: 1, name: "Anil", age: 25 },
  { id: 2, name: "Sunil", age: 30 },
  { id: 3, name: "Ravi", age: 15 }
];
📌 Expected Output:
 ["Anil", "Sunil", "Ravi"]*/

console.log("*********Extract User Names**************");

 const users2 = [
  { id: 1, name: "Anil", age: 25 },
  { id: 2, name: "Sunil", age: 30 },
  { id: 3, name: "Ravi", age: 15 }
];

const userName = users2.map(user => user.name);
console.log(userName);

/*
Filter Adults
Task
From the above users array, return only users whose age is 18 or above.*/
console.log("*********Filter Adults**************");

 const users = [
  { id: 1, name: "Anil", age: 25 },
  { id: 2, name: "Sunil", age: 30 },
  { id: 3, name: "Ravi", age: 15 }
];

const userAge = users.filter(user => user.age >= 18);

console.log(userAge);

/*
Get Names of Adults Only
Task
Filter users who are 18+


Then return only their names


📌 Expected Output:
 ["Anil", "Sunil"]
 */
console.log("*********Get Names of Adults Only**************");

 const users3 = [
  { id: 1, name: "Anil", age: 25 },
  { id: 2, name: "Sunil", age: 30 },
  { id: 3, name: "Ravi", age: 15 }
];

const userAge2 = users3.filter(user => user.age >= 18).map(user => user.name);
console.log(userAge2);


/*
Product Price Update
Input
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 15000 }
];

Task
Increase price by 10% for all products
Return a new array (do not modify original)
*/

console.log("*********Product Price Update**************");

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 15000 }
];

const updatedProducts = products.map(product => {
    return{
        name: product.name,
        price: product.price + (product.price * 0.10)
    }
});
console.log(updatedProducts);

/*
Filter Expensive Products
Task
From the above products, return products whose price is greater than 20,000.*/
console.log("*********Filter Expensive Products**************");

const products2 = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 15000 }
];

const expensiveProduct = products2.filter(productPrice => {
    return productPrice.price > 20000;
});
console.log(expensiveProduct);

/*
Student Result Summary
Input
const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 35 },
  { name: "Karan", marks: 70 }
];

Task
Filter students who passed (marks ≥ 40)


Return a new array with only their names in uppercase


📌 Expected Output:
 ["AMAN", "KARAN"]
*/

console.log("*********Student Result Summary**************");

const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 35 },
  { name: "Karan", marks: 70 }
];

const passedStudent = students.filter(student => student.marks>=40).map(student => student.name.toUpperCase());
console.log(passedStudent);

/*
Problem: Filter and Transform Student Scores
Input
const scores = [25, 45, 60, 30, 80, 50];

Task
Use function chaining (filter() ➝ map()):
Expected Output
[50, 65, 85, 55]
*/
console.log("*********Filter and Transform Student Scores**************");

const scores = [25, 45, 60, 30, 80, 50];

const studentScore = scores.filter(score => score > 40).map(score => score + 5);
console.log(studentScore);



