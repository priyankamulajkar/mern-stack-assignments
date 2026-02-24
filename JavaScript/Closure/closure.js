/* 1. Easy — Basic Closure
Create a function outer() that defines a variable message = "Hello"
 Return an inner function that prints that message.
Expected Output:
Hello
*/
console.log("******************* Print Message******************************");

function outer() {
  let message = "Hello";
  function inner() {
    console.log(message);
  }
  inner();
}
outer();

// ***********************
/*2. Easy — Remember a Value
Create a function createGreeter(name) that returns another function.
 When called, it should greet the saved name.
Example:
const greetAnil = createGreeter("Anil");
greetAnil(); // Hello Anil
*/

console.log(
  "******************* Remember a Value******************************",
);

function createGreeter(name) {
  function greetAnil() {
    console.log("Hello", name);
  }
  greetAnil();
}

const greetAnil = createGreeter("Anil");

/* Easy-Medium — Counter Using Closure
Create a function createCounter() that returns a function which increments and prints a counter each time it's called.
Example:
1
2
3
(No global variables allowed ❌)*/
console.log(
  "******************* Counter Using Closure******************************",
);
function createCounter() {
  let counter = 0;
  return function innerCounter() {
    counter++;
    console.log(counter);
  };
}

const counterfun = createCounter();
counterfun();
counterfun();
counterfun();

/*
Medium — Independent Counters
Create two counters using your function.
They must not affect each other.
Example:
counter1() → 1
counter1() → 2
counter2() → 1
counter1() → 3

*/

console.log(
  "******************* Independent Counters******************************",
);
function outerCounter1() {
  let counter1 = 0;

  return function innerCounter1() {
    counter1++;
    return counter1;
  };
}

const counter1fun = outerCounter1();
const counter2fun = outerCounter1();

console.log("Counter 1: ", counter1fun());
console.log("Counter 1: ", counter1fun());
console.log("Counter 1: ", counter1fun());

console.log("Counter 2: ", counter2fun());
console.log("Counter 2: ", counter2fun());
console.log("Counter 2: ", counter2fun());

/* 5. Medium — Private Variable
Create a function createBankAccount(initialBalance).
Return functions:
deposit(amount)

withdraw(amount)

getBalance()

Balance must be private and not directly accessible.*/

console.log("*******************Private Balance******************************");

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance = balance + amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient balance";
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const myAccount = createBankAccount(1000);

console.log("myAccount.getBalance : ", myAccount.getBalance());
console.log("myAccount.deposit:", myAccount.deposit(300));
console.log("myAccount.withdraw:", myAccount.withdraw(200));
console.log("myAccount.getBalance : ", myAccount.getBalance());

/*Medium — Function Factory
Create a function multiplier(factor) that returns another function to multiply numbers by that factor.
Example:
const double = multiplier(2);
double(5); // 10

const triple = multiplier(3);
triple(5); // 15
*/

console.log(
  "*******************Function Factory******************************",
);

function multiplier(factor) {
  return function multiplier2(num) {
    return (num *= factor);
  };
}

const double = multiplier(2);
console.log("Double Multiplier", double(5)); // 10

const triple = multiplier(3);
console.log("Triple Multiplier", triple(5)); // 15
