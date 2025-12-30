// Part A: Variable Declaration and Type Checking (20 marks)

// 1. Create a file named kgl_validation.js . Declare the following variables using appropriate
// keywords ( let or const ):
// companyName with the value "Karibu Groceries LTD"
// minimumTonnage with the value 1000
// isOperational with the value true
// managerName (declare but do not assign a value)
// closedBranches with the value null


// ********************* Answer ***********************

let companyName = 'Karibu Groceries LTD';
let minimumTonnage = 1000;
let isOperational = true;
let managerName;
let closeBranches = null;

// 2. Use the typeof operator to check and log the data type of each variable. (5 marks)

// ********************* Answer ***********************

console.log(companyName);  //String
console.log(minimumTonnage); //Number
console.log(isOperational); //Boolean
console.log(managerName); //Undefine
console.log(closeBranches); //Null

// 3. Write comments (single-line and multiline) explaining why you chose let or const for
// each variable. (5 marks)



// Part B: String Manipulation and Validation (25 marks)

// 4)  Declare a variable dealerNameInput with the value " james BOND " (note the extra
// spaces and inconsistent capitalization).

// ********************* Answer ***********************

let dealerNameInput = " james BOND ";

// 5)  Write code that:
// Removes the leading and trailing whitespace
// Converts the cleaned name to proper title case (first letter of each word capitalized)
// Stores the result in a new variable cleanDealerName
// Logs the result using a template literal: "Cleaned Dealer Name: [name]" (10 marks)

// ********************* Answer ***********************

console.log(dealerNameInput.trim());




