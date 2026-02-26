/*Convert Object to JSON String
Create an object:
{ name: "Rahul", age: 25, city: "Pune" }

Convert it into a JSON string and print it.*/
console.log("****Convert Object to JSON String****");

const person = { name: "Rahul", age: 25, city: "Pune" };

const jsonString = JSON.stringify(person);
console.log("JSON string: ", jsonString);

/*Convert JSON String Back to Object
Given:
let data = '{"product":"Laptop","price":55000}';

Convert it into a JavaScript object and print product.*/

console.log("****Convert JSON String Back to Object****");

let data = '{"product":"Laptop","price":55000}';
const obj = JSON.parse(data);
console.log("JSON String Back to Object:", obj);

/* Q3. Access Nested Property Using Optional Chaining
Given:
let user = {
  name: "Amit",
  address: {
    city: "Mumbai"
  }
};

Print city using optional chaining.
Also try accessing:
user.contact.phone

It should NOT throw error. */
console.log("****Access Nested Property Using Optional Chaining****");

let user = {
  name: "Amit",
  address: {
    city: "Mumbai",
  },
};

console.log("user.address?.city: ", user.address?.city);
console.log("user.contact?.phone: ", user.contact?.phone);

/*Q4. Handle Missing Data Safely
Given:
let student = {
  name: "Neha"
};

Print:
"City not available"

if student.address.city does not exist.
👉 Use optional chaining + default value.*/
console.log("****Use optional chaining + default value****");

let student = {
  name: "Neha",
};

const city = student.address?.city || "City not available";

// option 2
// const city = student.address?.city ?? "City not available";
console.log(city);

/*  Shallow Copy Problem
Create:
let original = {
  name: "Raj",
  skills: ["JS", "React"]
}; 
Make a shallow copy using spread operator.
Now push "Node" into copied object's skills.

*/
console.log("****Shallow Copy Problem****");

let original = {
  name: "Raj",
  skills: ["JS", "React"],
};

const copy = { ...original };
copy.skills.push("Node");

console.log("Original", original);
console.log("Copy", copy);

/* Q6. Deep Copy Using JSON Method
Using the same object from Q5:
Create a deep copy using:
JSON.parse(JSON.stringify(obj))

Now modify the copied object and show that original does NOT change. */
console.log("****Deep Copy Using JSON Method****");

let original1 = {
  name: "Raj",
  skills: ["JS", "React"],
};
const deepCopy = JSON.parse(JSON.stringify(original1));

deepCopy.skills.push("Node");
console.log("Original", original1);
console.log("Deep Copy", deepCopy);

/* Q7. Convert Array of Objects to JSON
Given:
let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

Convert it into JSON and print.
Then convert it back to JS object and print second user's name. */
console.log("****Convert Array of Objects to JSON****");

let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const convertJSON = JSON.stringify(users);
console.log("Convert object to JSON:", convertJSON);
const convertObject = JSON.parse(convertJSON);
console.log("Convert JSON to Object:", convertObject);
console.log("Second user's name:", convertObject[1].name);

/* 🔴 Hard Level
Q8. Real-Life API Simulation
You receive this JSON from server:
let response = '{"status":true,"data":{"user":{"name":"Kiran","email":"kiran@gmail.com"}}}';

Tasks:
 1️⃣ Convert JSON → Object
 2️⃣ Print email safely using optional chaining
 3️⃣ If email missing → print "Email not found"
 */
console.log("****API Simulation****");

let response =
  '{"status":true,"data":{"user":{"name":"Kiran","email":"kiran@gmail.com"}}}';

const convertJSONObj = JSON.parse(response);
console.log("Convert JSON → Object: ", convertJSONObj);

const emailSafety = convertJSONObj?.data?.user?.email;
console.log(emailSafety);

const email = convertJSONObj?.data?.user?.email ?? "Email not found";
console.log(email);

/* Q9. Find the Bug (Shallow Copy Trap)


❓ Why did a change?
Students must explain:
Spread operator only does shallow copy
 */
console.log("****Find the Bug (Shallow Copy Trap)****");

let a = {
  id: 1,
  details: {
    city: "Delhi",
  },
};

let b = { ...a };
b.details.city = "Chennai";

console.log(a.details.city);
/* The spread operator creates only a shallow copy.
It copies only the first level of the object.
The nested object: details: { city: "Delhi" }
is still shared between a and b.
So both a.details and b.details point to the same object in memory.
That is why:
b.details.city = "Chennai";
also changes:
a.details.city */

/* Q10. Build Your Own Deep Copy Function (Conceptual)
Without using structuredClone, ask students:
👉 Write a function that deep copies using:
JSON.stringify + JSON.parse

Then test with:
let originalObj = {
  name: "Test",
  nested: { value: 10 }
};
Modify copied object's nested value and prove original is safe. */

console.log("****Own Deep Copy Function****");

function deepCopyfn(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Test obj
let originalObj = {
  name: "Test",
  nested: { value: 10 },
};

const copied = deepCopyfn(originalObj);
copied.nested.value = 99;

console.log(originalObj);
console.log(copied);
