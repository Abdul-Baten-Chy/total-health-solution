Live-site-Link: https://roaring-macaron-16547b.netlify.app

1. Write the correct answer from the following options and give an explanation (2-5 lines).


let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer: A: {}  let support its value to reassaign, variable declear with let is initialise with undefine.
and when it value is reassaign it takes its value on the other hand const does not support this,
when we declear variable with const we must assain its value.


2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer: C 12. because 1 is number and 2 is string so string will be prioritize and value will be
concatenate. 

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer: A. In this question answer will be option A. Becouse in this case the refference of food was n ot copied
only its value was called. if whole object name copied then its value may be changed but in this case
only an index value of array was called not the whole array. 

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer: answer will be B. function receive a paramiter but when called no arguments was passed
thats why name will be undefine and the total statement will be like option B.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: write answer is 3. when foreach run for the first time its argument will be falsy value thats why
count value will not increase by one. from the second step count value will be increased by 1.
thus the result will be 3. 
