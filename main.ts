import { Console } from "console";
import inquirer from "inquirer";

// initilize user balance and pin code
let myBalance = 5000;
let myPin = 1234;

// Print welcome message
console.log("welcome to code with Aisha -ATM Machine");

let pinAnswer = await inquirer.prompt([
        {
            
            name: "pin",
            type: "number",
            message: "Enter your pin code",
                }
])
if (pinAnswer.pin === myPin){
console.log("Pin is correct, Login successfully!");
// console.log(`current Account Balance is ${myBalance}`)

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation:",
        choices: ["Withdraw Amount", "Check Balance",]
    }
])

if (operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw"
        }
    ])
    if (amountAns.amount > myBalance){
   
        console.log("insufficient Balance")
    }
    else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`)
    }
}

else if (operationAns.operation === "Check Balance"){
    console.log(`Your Account Balance is: ${myBalance}`)
}
}

else{
    console.log("Pin is incorrect, Try Again!")
}

