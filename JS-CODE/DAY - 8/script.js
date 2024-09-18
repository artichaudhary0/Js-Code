// calculate bill
/*
NaN : not a number
*/

// calculate bill (TSRS)
// function calBill(amount, taxRate) {
//   let tax = amount * (taxRate / 100);
//   let totalAmount = amount + tax;
//   return totalAmount;
// }

// let amount = 100;
// let taxRate = 12;

// console.log(calBill(amount, taxRate));

// calculate interest rate (TSRS)

// function calInterestRate(principle, rate , time){
//     let intrest = principle *(rate/100)*time
//     return intrest
// }

// let principle = 100
// let rate  = 12
// let time = 12

// console.log(calInterestRate(principle,rate,time))

// salary calculation

// function calSalary(basicSalary , hoursWorked , hourlyRate)
// {
//     let overTime = Math.max(hoursWorked-20,0)
//     let overTimePay = overTime*(hourlyRate)

//     let totalSalary = basicSalary+overTimePay
//     return totalSalary
// }

// let bS = 10000
// let hW = 50
// let hR = 10

// console.log(calSalary(10000,50,hR))

let array = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = array;

array3[1] = 20;

console.log(array);

console.log(array3);
