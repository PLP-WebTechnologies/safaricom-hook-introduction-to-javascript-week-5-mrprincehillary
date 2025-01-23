// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe"; // string
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["reading", "coding", "hiking"]; // array
let person = { name: "Jane", age: 30 }; // object

// Log variable values and types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (!isNaN(num1) && !isNaN(num2)) {
        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operation";
        }
        console.log(`Result: ${result}`);
    } else {
        console.log("Please enter valid numbers.");
    }
}

// Call the calculator function
calculator();

// Functions: Greeting User
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
}

// Display greeting in an HTML element
document.getElementById('dynamic-content').innerHTML += `<p>${greetUser(name)}</p>`;

// Part 2: JavaScript Control Structures

// If Statements: Check Voting Eligibility
let userAge = parseInt(prompt("Enter your age:"));
let eligibilityMessage = userAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
document.getElementById('dynamic-content').innerHTML += `<p>${eligibilityMessage}</p>`;

// Loops: Display Numbers 1 to 10
let numbersList = '<ol>';
for (let i = 1; i <= 10; i++) {
    numbersList += `<li>${i}</li>`;
}
numbersList += '</ol>';
document.getElementById('dynamic-content').innerHTML += numbersList;

// Part 3: Introduction to the DOM

// Changing the text of the <h1> element
document.querySelector('h1').textContent = "JavaScript in Action!";

// Adding new <p> element to the dynamic-content <div>
document.getElementById('dynamic-content').innerHTML += `<p>This content was added dynamically using JavaScript.</p>`;
