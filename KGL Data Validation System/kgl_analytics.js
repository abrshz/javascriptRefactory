// Coursework 3: KGL Analytics and Reporting System

// Part A: Higher Order Functions - Data Transformation (40
// marks)
// 1. Create a file named kgl_analytics.js . Create an array of at least 6 procurement record
// objects with this structure:
// {
// id: number,
// dealerName: string,
// produceType: string,
// tonnageInKgs: number,
// costInUgx: number,
// procurementDate: Date object
// }

// ********************* Answer ***********************

const procurementRecords = [
  {
    id: 101,
    dealerName: "Kabuuma Farmers Co-op",
    produceType: "Beans",
    tonnageInKgs: 1200,
    costInUgx: 3600000,
    procurementDate: new Date("2024-01-10"),
  },
  {
    id: 102,
    dealerName: "Maganjo Grain Millers",
    produceType: "Maize",
    tonnageInKgs: 2500,
    costInUgx: 5000000,
    procurementDate: new Date("2024-01-12"),
  },
  {
    id: 103,
    dealerName: "Lwengo Agribusiness",
    produceType: "Soya Beans",
    tonnageInKgs: 800,
    costInUgx: 2400000,
    procurementDate: new Date("2024-01-15"),
  },
  {
    id: 104,
    dealerName: "Nakaseke Growers",
    produceType: "Maize",
    tonnageInKgs: 1500,
    costInUgx: 3150000,
    procurementDate: new Date("2024-01-18"),
  },
  {
    id: 105,
    dealerName: "Bunyoro Produce Ltd",
    produceType: "G-nuts",
    tonnageInKgs: 600,
    costInUgx: 4200000,
    procurementDate: new Date("2024-01-20"),
  },
  {
    id: 106,
    dealerName: "Kabuuma Farmers Co-op",
    produceType: "Beans",
    tonnageInKgs: 900,
    costInUgx: 2700000,
    procurementDate: new Date("2024-01-22"),
  },
];

console.log(`Loaded ${procurementRecords.length} procurement records.`);

// 2. Use the .map() method to create a new array where each record includes a new
// calculated property costPerKg (costInUgx ÷ tonnageInKgs). The new array should have
// objects with the original properties PLUS the new costPerKg property. (10 marks)

// ********************* Answer ***********************

const recordsWithUnitCost = procurementRecords.map((record) => {
  const unitCost = record.costInUgx / record.tonnageInKgs;
  return {
    ...record,
    costPerKg: unitCost,
  };
});

console.log("Record with Unit Cost:", recordsWithUnitCost[0]);

// 3. Use the .filter() method to create a new array containing only procurement records
// where:
// tonnageInKgs >= 1000 (meeting the minimum requirement for individual dealers)
// Log the filtered array and its length (10 marks)

// ********************* Answer ***********************

const highTonnageRecords = recordsWithUnitCost.filter((record) => {
  return record.tonnageInKgs >= 1000;
});

console.log(highTonnageRecords);
console.log(
  `Total count of high-tonnage records: ${highTonnageRecords.length}`
);

// 4. Use the .reduce() method to calculate:
// The total tonnage procured across all records
// The total cost (sum of all costInUgx values)
// Log both totals with appropriate labels using template literals (10 marks)

// ********************* Answer ***********************

const totals = procurementRecords.reduce(
  (acc, record) => {
    acc.totalTonnage += record.tonnageInKgs;
    acc.totalCost += record.costInUgx;
    return acc;
  },
  { totalTonnage: 0, totalCost: 0 }
);
console.log(
  `Total Tonnage Procured: ${totals.totalTonnage.toLocaleString()} kg`
);
console.log(`Total Procurement Cost: ${totals.totalCost.toLocaleString()} UGX`);

// Part B: Sets for Unique Data Management (30 marks)

//5. Create a function getUniqueDealers that:
// Takes an array of procurement records as a parameter
// Uses a Set to extract all unique dealer names
// Returns an array of unique dealer names (convert Set back to array)
// Call the function with your procurement data and log the result (15 marks)

// ********************* Answer ***********************

function getUniqueDealers(records) {
  const allNames = records.map((record) => record.dealerName);
  const uniqueNameSet = new Set(allNames);
  return [...uniqueNameSet];
}

const uniqueDealers = getUniqueDealers(procurementRecords);

console.log(uniqueDealers);
console.log(`Total unique dealers: ${uniqueDealers.length}`);

// 6. Create a Set called authorizedRoles and add these values: 'Manager' , 'Director' .
// Write a function isAuthorizedForProcurement that:
// Takes a userRole parameter
// Uses the .has() method to check if the role exists in the Set
// Part C: Maps for Price Management (30 marks)
// Returns a Boolean
// Test the function with different roles and log the results (15 marks)

// ********************* Answer ***********************

const authorizedRoles = new Set();
authorizedRoles.add('Manager');
authorizedRoles.add('Director');

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole);
}

console.log(`Is 'Manager' authorized? ${isAuthorizedForProcurement('Manager')}`);    
console.log(`Is 'Director' authorized? ${isAuthorizedForProcurement('Director')}`);  
console.log(`Is 'Clerk' authorized? ${isAuthorizedForProcurement('Clerk')}`);       
console.log(`Is 'Sales Agent' authorized? ${isAuthorizedForProcurement('Sales Agent')}`); 

// Part C: Maps for Price Management (30 marks)

// 7. Create a Map called kglPriceList and set the following key-value pairs:
// 'Beans' → 5500
// 'Grain Maize' → 4800
// 'Cow peas' → 6000
// 'G-nuts' → 7200
// 'Soybeans' → 5800 (10 marks)

// ********************* Answer ***********************

const kglPriceList = new Map();

kglPriceList.set('Beans', 5500);
kglPriceList.set('Grain Maize', 4800);
kglPriceList.set('Cow peas', 6000);
kglPriceList.set('G-nuts', 7200);
kglPriceList.set('Soybeans', 5800);

// Log the Map to verify its contents
console.log(kglPriceList);

// 8. Write a function calculateSaleTotal that:
// Takes two parameters: produceName (string) and tonnageInKgs (number)
// Uses the Map's .get() method to retrieve the price per kg for that produce
// If the produce doesn't exist in the Map, return "Price not found"
// Otherwise, return the total sale amount (price × tonnage)
// Test with multiple produce types (15 marks)

// ********************* Answer ***********************

function calculateSaleTotal(produceName, tonnageInKgs) {
    const pricePerKg = kglPriceList.get(produceName);
    if (pricePerKg === undefined) {
        return "Price not found";
    }
    return pricePerKg * tonnageInKgs;
}

const beansTotal = calculateSaleTotal('Beans', 100); 
console.log(`100kg of Beans: UGX ${beansTotal}`); 

const gNutsTotal = calculateSaleTotal('G-nuts', 50);
console.log(`50kg of G-nuts: UGX ${gNutsTotal}`); 

const riceTotal = calculateSaleTotal('Rice', 200);
console.log(`200kg of Rice: ${riceTotal}`); 

// 9. Write code that:
// Uses a loop to iterate over your kglPriceList Map
// For each entry, logs: "Produce: [name], Price per Kg: [price] UgX"
// Calculates and logs the highest price in the Map using the .reduce() method on the
// Map values (5 marks)

// ********************* Answer ***********************

for (const [produce, price] of kglPriceList) {
    console.log(`Produce: ${produce}, Price per Kg: ${price} UgX`);
}

const prices = Array.from(kglPriceList.values());

const highestPrice = prices.reduce((max, current) => {
    return current > max ? current : max;
}, prices[0]);


