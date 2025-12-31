// Part A: Variable Declaration and Type Checking (20 marks)

// 1. Create a file named kgl_validation.js . Declare the following variables using appropriate
// keywords ( let or const ):
// companyName with the value "Karibu Groceries LTD"
// minimumTonnage with the value 1000
// isOperational with the value true
// managerName (declare but do not assign a value)
// closedBranches with the value null

// ********************* Answer ***********************

let companyName = "Karibu Groceries LTD";
let minimumTonnage = 1000;
let isOperational = true;
let managerName;
let closeBranches = null;

// 2. Use the typeof operator to check and log the data type of each variable. (5 marks)

// ********************* Answer ***********************

console.log(companyName); //String
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

let cleanDealerName = dealerNameInput
  .trim()
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// 6. Write a validation check using comparison operators to verify that cleanDealerName :
// Has a length of not less than 2 characters
// Is not empty
// Log "Valid dealer name" or "Invalid dealer name" based on the result (10 marks)

// ********************* Answer ***********************

const validationMsg = (cleanDealerName.length >= 2 && cleanDealerName !== "") 
    ? "Valid dealer name" 
    : "Invalid dealer name";

console.log(validationMsg);


//Part C: Conditional Logic and Business Rules (30 marks)
 

// 7. Create variables for a procurement record:
let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

// ********************* Answer ***********************

let unitCost = Number(costInUgx);

let totalCost = procurementTonnage * unitCost;

if (userRole === 'Sales Agent' && procurementTonnage <= 2000) {
    console.log(`--- Procurement Summary ---`);
    console.log(`Agent Role: ${userRole}`);
    console.log(`Produce: ${produceType}`);
    console.log(`Total Weight: ${procurementTonnage}kg`);
    console.log(`Total Cost: ${totalCost.toLocaleString()} UGX`);
    console.log(`Status: Authorized`);
} else {
    console.log("Status: Authorization Required (Tonnage exceeds limit or invalid role)");
}

// 8. Implement the following KGL business rules using if...else if...else statements:
// Rule 1: No sales agent is allowed to record any produce entry. If userRole is 'Sales
// Agent', log an error message and do NOT proceed with the other checks. (10 marks)
// Rule 2: For individual dealers, tonnage must be not less than 1000kg. Check if
// procurementTonnage >= 1000 . (5 marks)
// Rule 3: The cost must be not less than 5 digits. First convert costInUgx to a Number
// type, then check if it's >= 10000. (10 marks)

// ********************* Answer ***********************

if (userRole === 'Sales Agent') {
    // Rule 1: Immediate stop for Sales Agents
    console.log("Error: Sales Agents are not authorized to record produce entries.");

} else if (procurementTonnage < 1000) {
    // Rule 2: Tonnage check for other roles (like Individual Dealers)
    console.log("Error: Procurement tonnage must be at least 1000kg.");

} else if (Number(costInUgx) < 10000) {
    // Rule 3: Convert to Number and check for 5-digit minimum
    console.log("Error: The cost must be at least 10,000 UGX (5 digits).");

} else {
    // Final Step: If all rules pass
    console.log("Success: Procurement record is valid and has been processed.");
}

// 9. Use the logical AND ( && ) operator to create a single Boolean expression that checks if
// BOTH tonnage and cost conditions are met, and log "Procurement record valid" or
// "Procurement record invalid". (5 marks)

// ********************* Answer ***********************

if (procurementTonnage >= 1000 && Number(costInUgx) >= 10000) {
    console.log("Procurement record valid");
} else {
    console.log("Procurement record invalid");
}



