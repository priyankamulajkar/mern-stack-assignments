// Spread -- On right side (When Aiigning / Passing Values) - eg arr = [arr1, 3, 4]
// Rest -- Rest must be as a last parameter (Its inside function parameter) - eg, function(a, b, ...rest)
/*Q1. Sum of Unlimited Numbers using rest
Create a function that accepts any number of arguments and returns their sum.
👉 Example:
sum(1,2,3,4) → 10*/

console.log("****Sum of Unlimited Numbers****");

function sum(...numbers) {
  return numbers.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(5, 2));
console.log(sum());

/*Count Arguments
Write a function that returns how many values were passed.
👉 Example:
countArgs("a", "b", "c") → 3
*/

console.log("****Count Arguments****");

function countArgs(...args) {
  return args.length;
}
console.log(countArgs("a", "b", "c"));

/*
First Value + Remaining Values
Write a function that prints:
First argument separately
Remaining arguments as an array

👉 Example:
show(10,20,30,40)
First: 10
Rest: [20,30,40]
*/
console.log("****First Value + Remaining Values****");

function show(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}

show(10, 20, 30, 40);

/*
Find Maximum Value
Create a function using REST that returns the largest number.
*/

console.log("****Find Maximum Value****");

function largestNumber(...maxValue) {
  return Math.max(...maxValue);
}

console.log(largestNumber(1, 20, 80, 30, 70));

/*
Create a Shopping Cart
Write a function:
addToCart(userName, ...items)

Return:
"userName added X items"
*/

console.log("****Create a Shopping Cart****");

function addToCart(userName, ...items) {
  return `${userName} added ${items.length} items`;
}
console.log(addToCart("Priyanka", "Bag", "Shoes", "Watch"));

/*
Remove a Property Using REST
Given:
const user = { id:1, name:"Alex", password:"1234", role:"admin" }

Create a new object without password using destructuring + REST.*/

console.log("****Remove a Property Using REST****");

const user = { id: 1, name: "Alex", password: "1234", role: "admin" };

// function removePassword({ password, ...remainingUser }) {
//   return remainingUser;
// }

// console.log(removePassword(user));

// Short Version

const { password, ...withoutPassword } = user;
console.log(withoutPassword);

// Spread Operator

/*Q7. Copy an Array
Create a copy of an array using spread and prove that modifying the copy does NOT affect original (primitive values).*/
console.log("****Copy an Array****");

// Number
const arr = [10, 20, 30];

const copyArr = [...arr];

copyArr[0] = 100;

console.log("Original Arrray", arr);
console.log("Copy Array", copyArr);

// String

const stringArr = ["apple", "banana"];
const copy = [...stringArr];

copy[1] = "Pineapple";
console.log("Original Arrray", stringArr);
console.log("Copy Array", copy);

// Boolean

const original = [true, false];
const copy1 = [...original];
copy1[0] = false;
console.log("Original Arrray", original);
console.log("Copy Array", copy1);

// Undefined
const original1 = [undefined, 10];
const copy2 = [...original1];
copy2[0] = 5;
console.log("Original Arrray", original1);
console.log("Copy Array", copy2);

// null
const original2 = [null, 15];
const copy3 = [...original2];
copy3[0] = 5;
console.log("Original Arrray", original2);
console.log("Copy Array", copy3);

// BigInt

const original3 = [10n, 15n];
const copy4 = [...original3];
copy4[0] = 20n;
console.log("Original Arrray", original3);
console.log("Copy Array", copy4);

// Symbol

const s1 = Symbol("a");
const s2 = Symbol("b");
const original4 = [s1, s2];
const copy5 = [...original4];
copy5[0] = Symbol("new");
console.log("Original Arrray", original4);
console.log("Copy Array", copy5);

/*Merge Two Arrays
Merge:
const frontend = ["HTML","CSS"]
const backend = ["Node","DB"]
Expected:
["HTML","CSS","Node","DB"]
*/
console.log("****Merge Two Arrays****");

const frontend = ["HTML", "CSS"];
const backend = ["Node", "DB"];

const mergeArray = [...frontend, ...backend];
console.log(mergeArray);

/*Q9. Insert Value in Between
Using spread, insert 3 between [1,2,4,5] without manually editing.*/
console.log("****Insert Value in Between using Spread***");

const arr2 = [1, 2, 4, 5];
// Option1 - arr2.slice(2) - from index 2 values shows
// const newArr = [arr2[0], arr2[1], 3, ...arr2.slice(2)];
// Option 2  - rr2.slice(0, 2) - start and end values added
const newArr = [...arr2.slice(0, 2), 3, ...arr2.slice(2)];

console.log(newArr);

/* Section 4 — Spread with Objects
Q10. Clone an Object
Clone an object and add a new property status: "active"
*/
console.log("****Spread with Objects***");

const person = {
  id: 1,
  name: "Priyanka",
  age: 25,
  city: "Pune",
};

const newUser = {
  ...person,
  status: "active",
};

console.log(newUser);

/* Override Property
Update:
const config = { theme:"light", fontSize:14 }

Change theme to "dark" using spread.
*/
console.log("****Override Property***");

const config = { theme: "light", fontSize: 14 };

const overrideConfig = {
  ...config,
  theme: "dark",
};
console.log(overrideConfig);

/*Merge Two Objects
Combine:
const basic = { name:"Sam" }
const details = { age:25, city:"Pune" }*/

console.log("****Merge Two Objects***");

const basic = { name: "Sam" };
const details = { age: 25, city: "Pune" };
const mergeObject = { ...basic, ...details };
console.log(mergeObject);

/*13) Combine Multiple Arrays
You receive paginated API data:
page1 = [1,2]
page2 = [3,4]
page3 = [5,6]

Combine all into one array using spread.*/
console.log("****Combine Multiple Arrays***");

const page1 = [1, 2];
const page2 = [3, 4];
const page3 = [5, 6];

const combineArray = [...page1, ...page2, ...page3];
console.log(combineArray);

/*Q14. Convert Function Arguments into Array
Write a function using REST that returns all arguments in uppercase (assume strings).*/
console.log("****Convert Function Arguments into Array****");

function fnUppercase(...args) {
  return args.map((str) => {
    return str.toUpperCase();
  });
}
console.log(fnUppercase("a", "b", "abc"));

/*Q15. Immutable Update (Important for React Developers)
Update this object without mutating original:
const state = { name:"User", loggedIn:false }

Set loggedIn: true.*/
console.log("****Immutable Update****");

const state = { name: "User", loggedIn: false };

const changeState = {
  ...state,
  loggedIn: true,
};
console.log(state);
console.log(changeState);

/*Section 6 — Challenging Problems
Q16. Merge Arrays Without Duplicates
Merge two arrays and remove duplicates using spread + Set.
*/
console.log("****Merge Arrays Without Duplicates****");

const mergeArr1 = [1, 2, 3];
const mergeArr2 = [3, 4, 5];

const mergeArrWithoutDuplicate = new Set([...mergeArr1, ...mergeArr2]);
console.log("Merge Arrays Without Duplicates", mergeArrWithoutDuplicate);

/* Separate One Field, Keep Rest
From:
const employee = {
  id:101,
  name:"John",
  salary:50000,
  department:"IT"
}

Extract id and store the remaining fields separately.*/
console.log("****Separate One Field, Keep Rest****");

const employee = {
  id: 101,
  name: "John",
  salary: 50000,
  department: "IT",
};

const { id, ...remainingFields } = employee;
console.log(id);
console.log(remainingFields);

// Option 2

// function employeeSep({id, ...remainingFields}){
//   return {id, remainingFields};
// }
// const result = employeeSep(employee);
// console.log(result.id);
// console.log(result.remainingFields);

/*Dynamic Average Calculator
Write a function that calculates the average of unlimited numbers using REST.*/
console.log("****Dynamic Average Calculator****");

function averageCalculator(...numbers){
  if(numbers.length == 0 ) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return sum / numbers.length;
}
console.log("averageCalculator(10, 20, 30) =", averageCalculator(10, 20, 30));

/*Q19. Pass Array to Function Using Spread
Create a function:
function multiply(a,b,c)

Call it using:
const nums = [2,3,4]

(using spread)*/

console.log("****Pass Array to Function Using Spread****");

function multiply(a,b,c){
  return a*b*c;
}
const nums = [2,3,4]
console.log(nums)
console.log("Multiply:", multiply(...nums));


/*Nested Object Copy Issue (Conceptual)
Show that spread creates a shallow copy by modifying nested data and explaining what happened.*/
console.log("****Nested Object Copy ****");

const user1 = {
  name: "Priyanka",
  address: {
    city: "Pune",
    pin: 411014
  }
};
// Copy user
const copyUser = {
  ...user1
}
copyUser.address.city = "Mumbai";
console.log("original", user1);
console.log("Copy", copyUser);

/*Q21. Build Your Own Math Utility
Create functions using REST:
add()

subtract()

multiplyAll()

Each should accept unlimited inputs.*/

function add(...numbers){
    return numbers.reduce((sum, num) => {
      return sum + num;
    });
};
console.log("Add:",add(10, 20, 30));

function subtract(...numbers){
  return numbers.reduce((sub, num) => {
      return sub - num;
    });
}
console.log("Sub:",subtract(30, 20));

function multiplyAll(...numbers){
 return numbers.reduce((mul, num) => {
      return mul * num;
    });
}
console.log("Multiply:",multiplyAll(5, 2));






