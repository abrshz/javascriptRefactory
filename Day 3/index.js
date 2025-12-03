

// 1

let procurementTonnage = 1200;

if (procurementTonnage >= 1000){
    console.log(`You have purchased ${procurementTonnage}kg.`);
}else {
    console.log(`The contractual minimum procurement threshold is 1,000 kg.`);
}




// 2

let costStr = '5000';
let costNum = 5000;

if(costStr === costNum) {
    console.log('It is strict equality which means values and their data types are equal.');
}else{
    console.log('It is lose equality which means values are equal.');
}


// 3

let dealerName = 3;
let costUGX = 15000;

if (dealerName >= 2 && costUGX >= 10000){
    console.log('Thank you for choice us!');
}else{
    console.log("Kindly fill the requirement.");
}

// 4

let saleTime = new Date();

const saleDate = saleTime.getDate();
const saleMonth = saleTime.getMonth() +1;
const saleYear = saleTime.getFullYear();

const purchaseDate = `Sales on: ${saleDate}/${saleMonth}/${saleYear}`

console.log(purchaseDate);








