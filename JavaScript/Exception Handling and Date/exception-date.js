/* Handle Undefined Variable
Write a program that tries to print an undeclared variable.
 Use try...catch to show "Variable not found" instead of crashing.*/
console.log("****Handle Undefined Variable****");

 try {
    console.log(x);
 } catch (error) {
    console.log("Variable not found");
 }

 /* JSON Parsing Safety
Given:
let data = '{"name": "Alex"}';
Parse it safely using exception handling.
 If parsing fails → print "Invalid JSON". */

console.log("****JSON Parsing Safety****");

 let data = '{"name": "Alex"}';
 try {
   const parseData = JSON.parse(data);
   console.log(parseData);
 } catch (error) {
   console.log("Invalid JSON");
 }

 /* Divide Two Numbers
Create a function:
divide(a, b)
If b = 0, throw an error "Cannot divide by zero". */
console.log("****Divide Two Numbers****");

function divide(a, b){
if (b===0){
   throw new error("Cannot divide by zero");
}
return a/b;
}

try {

   console.log(divide(4, 2));
   console.log(divide(10, 0));

} catch (error) {
   console.log(error.message);
}

/* Always Execute Code
Write code that prints:
Start
Handled Error
End
Use finally to ensure "End" always prints. */
console.log("****Finally ****");

console.log("Start");
try {
   throw new error("Error");
   
} catch (error) {
   console.log("Handled Error")
} finally{
   console.log("End");
}

/* 5️⃣ Validate User Age
Create a function:
checkAge(age)
Rules:
Age must be number
Age must be ≥ 18
If invalid → throw custom error.
 */
console.log("****Validate User Age****");

function checkAge(age){
if (typeof(age) !== "number"){
   throw new error("Age must be number");
}

if(age>= 18){
   throw new error("Age must be ≥ 18")
}
return "Valid age";
}

try {
   console.log(checkAge(22));
   console.log(checkAge(17));
   console.log(checkAge("20"));

} catch (error) {
   console.log(error.message)
}

/* 
Custom Error Class
Create your own error:
class LoginError extends Error
Throw it when username is empty.
 */
console.log("****Custom Error Class****");

class LoginError extends Error{

}

function login(username){
   if(username === ""){
      throw new LoginError("username is empty");
   }
}

try {
   login("");
} catch (error) {
   console.log(error.message)
}

/* Nested Error Handling
Create nested try...catch:
Inner handles JSON error
Outer handles any other error
 */
console.log("****Nested Error Handling****");

try {
   try {
      const userdata = '{"name": "Alex"';
      const userparse = JSON.parse(userdata);
      console.log(userparse);
      
   } catch (e) {
      console.log("JSON error handling");
   }
   x= y-1;
} catch (e) {
   console.log("Other error handles")
}

/* 8️⃣ API Simulation Error Handling
Create a fake function:
fetchData(success)
If success = false, throw "API Failed".
Handle error properly.
 */
console.log("****API Simulation Error Handling****");


function fetchData(success){
   if(success === false){
      throw new Error("API Failed");
   }
   return "Data received successfully"
}
try {
   const result = fetchData(false);
   console.log(result)
} catch (err) {
   console.log(err.message)
}

