// Coursework 2: KGL Inventory Processing System

// Part A: Function Implementation (30 marks)

// 1. Create a file named kgl_functions.js . Write a function named
// calculateProcurementCost that:
// Takes two parameters: tonnageInKg and pricePerKg
// Returns the total cost (tonnage × price)

// ********************* Answer ***********************

function calculateProcurementCost(tonnageInKg, pricePerKg) {
  if (
    typeof tonnageInKg !== "number" ||
    typeof pricePerKg !== "number" ||
    tonnageInKg < 0 ||
    pricePerKg < 0
  ) {
    return "Invalid input";
  }
  return tonnageInKg * pricePerKg;
}

// 2. Write an arrow function named validateBuyerName that:
// Takes one parameter: buyerName
// Returns true if the name length is >= 2 and the name is not empty
// Returns false otherwise (10 marks)

// ********************* Answer ***********************

const validateBuyerName = (buyerName) => {
  if (typeof buyerName === "string" && buyerName.trim().length >= 2) {
    return true;
  }

  return false;
};

// 3. Create a function named checkUserAuthorization that:
// Takes one parameter: role
// Uses a switch statement to check the role
// Returns "procurement_and_sales" for 'Manager'
// Returns "sales_only" for 'Sales Agent'
// Returns "view_aggregations" for 'Director'
// Returns "unauthorized" for any other role (10 marks)

// ********************* Answer ***********************

function checkUserAuthorization(role) {
  switch (role) {
    case "Manager":
      return "procurement_and_sales";
    case "Sales Agent":
      return "sales_only";
    case "Director":
      return "view_aggregations";
    default:
      return "unauthorized";
  }
}

// Part B: Object Creation and Manipulation (35 marks)

// 4. Create a function createSalesRecord that takes four parameters ( produceName ,
// tonnage , buyerName , amountPaid ) and returns an object with the following structure:

// {
// id: // Generate a random number between 1000-9999
// produceName: // parameter value
// tonnageInKgs: // parameter value
// buyerName: // parameter value
// amountPaid: // parameter value
// saleDate: // current date using new Date()
// isCreditSale: false
// }

// (15marks)

// ********************* Answer ***********************

function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
  const randomId = Math.floor(Math.random() * 1000) + 1000;
  return {
    id: randomId,
    produceName: produceName,
    tonnageInKgs: tonnage,
    buyerName: buyerName,
    amountPaid: amountPaid,
    saleDate: new Date(),
    isCreditSale: false,
  };
}

// 5. Create a sales record object by calling your function with test data. Then:
// Add a new property branch with value "Maganjo" using dot notation
// Modify the isCreditSale property to true
// Add a dueDate property using bracket notation
// Use Object.keys() to get all property names and log them (10 marks)

// ********************* Answer ***********************

// --- 5. Object Manipulation Task ---

let salesRecord = createSalesRecord("Maize Flour", 1200, "John Doe", 3000000);

salesRecord.branch = "Maganjo";

salesRecord.isCreditSale = true;

salesRecord["dueDate"] = "2024-12-31";

const propertyNames = Object.keys(salesRecord);

console.log("Property Names:", propertyNames);
console.log("Full Record Object:", salesRecord);

// 6. Write a for...in loop that iterates over your sales record object and logs each property
// name and value in the format: "Property: [name], Value: [value]" (10 marks)

// ********************* Answer ***********************

for (let key in salesRecord) {
  console.log(`Property: ${key}, Value: ${salesRecord[key]}`);
}

// Part C: Loop Implementation and Data Processing (35
// marks)

// 7. Create an array of daily procurement tonnages for a week:
// let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
// Calculates the total tonnage for the week
// Calculates the average daily tonnage
// Logs both results (15 marks)

// ********************* Answer ***********************

let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let totalTonnage = 0;

for (let i = 0; i < weeklyTonnage.length; i++) {
  totalTonnage += weeklyTonnage[i];
}

let averageTonnage = totalTonnage / weeklyTonnage.length;

console.log("Total Tonnage for the week:", totalTonnage, "kg");
console.log("Average Daily Tonnage:", averageTonnage.toFixed(2), "kg");

// 8. Create an array of sales records (use your createSalesRecord function to create at least 5
// records with varying data). Write code using a for...of loop that:
// Counts how many credit sales exist ( isCreditSale === true )
// Uses the continue statement to skip non-credit sales
// Logs "Total credit sales: [count]" (15 marks)

// ********************* Answer ***********************

let salesRecords = [
  createSalesRecord("Maize", 1200, "John Doe", 3000000),
  createSalesRecord("Beans", 800, "Mary Atieno", 1500000),
  createSalesRecord("Soya", 500, "KGL Traders", 900000),
  createSalesRecord("Rice", 1500, "Alice Nakato", 4500000),
  createSalesRecord("Cowpeas", 300, "Maganjo Millers", 400000),
];

let creditCount = 0;

for (let record of salesRecords) {
  if (record.isCreditSale !== true) {
    continue;
  }
  creditCount++;
}

console.log(`Total credit sales: ${creditCount}`);

// 9. Simulate a stock check: Create an inventory array:
// let inventory = [
// {name: 'Beans', tonnage: 500},
// {name: 'Maize', tonnage: 0},
// {name: 'G-nuts', tonnage: 300}
// ];
// Search for the first item with tonnage === 0
// When found, log "Manager Alert: [produce name] is out of stock" and exit the loop
// immediately (5 marks)

// ********************* Answer ***********************

let inventory = [
  { name: "Beans", tonnage: 500 },
  { name: "Maize", tonnage: 0 },
  { name: "G-nuts", tonnage: 300 },
];

for (let item of inventory) {
  if (item.tonnage === 0) {
    console.log(`Manager Alert: ${item.name} is out of stock`);
    break;
  }
}
