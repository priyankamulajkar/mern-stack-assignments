🧠 Assignment Array.reduce()

✅ Easy Level ( Understand Accumulator)
1️⃣ Find Product of All Numbers
Write a function using reduce() to multiply all numbers in an array.
Input:  [2, 3, 4]
Output: 24


2️⃣ Count Total Characters in All Words
Find total number of characters in the array.
Input:  ["hi", "welcome", "js"]
Output: 11


3️⃣ Convert Array into Comma Separated String (Without join)
Use reduce() to convert array to string.
Input:  ["React", "Node", "Mongo"]
Output: "React,Node,Mongo"

💡 Hint: accumulator should be a string.

⚙️ Medium Level (Understand Object Accumulation)
4️⃣ Count Even and Odd Numbers
Return count of even and odd numbers.
Input:  [1,2,3,4,5,6]

Output:
{
  even: 3,
  odd: 3
}

5️⃣ Create Map of Word Lengths
Group words based on their length.
Input: ["hi", "hello", "js", "reduce"]

Output:
{
  2: ["hi","js"],
  5: ["hello"],
  6: ["reduce"]
}

💡 Hint: key will be word.length.

6️⃣ Find Total Price of Cart
Calculate total cart value.
const cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 200, qty: 3 }
];

Output: 3100

🚀 Complex Level (Real Thinking with reduce)
7️⃣ Flatten Array Without Using flat()
Input: [[1,2], [3,4], [5,6]]

Output: [1,2,3,4,5,6]

8️⃣ Find Second Largest Number
Do NOT sort.
Input: [10, 5, 8, 20, 15]

Output: 15


9️⃣ Build a Real “Group By + Count” Dashboard
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




