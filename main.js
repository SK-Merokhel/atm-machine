#!/usr/bin/env node
/*
Module helps us to keep track individually. Without modules, we would create one file and write all code into one file. Modules allow us to divide one file into different files.

Advantages of Modules:
1. Readability and Maintainability: Breaking code into modules makes it easier to understand and maintain, as each module handles a specific task.
2. Isolation: Modules operate independently, so if one module has an error, it doesn't affect others, making debugging easier.
3. Ease of Import and Export: Modules can import and export functionalities easily, allowing code written in different files to interact seamlessly.
*/
// Importing the 'inquirer' package allows us to interact with the user via the command line.
import inquirer from "inquirer";
/*
inquirer ask questions accordinly
we provide the details to inquirer or else it won't work, format should be correct

Example: (This format is called object)
{
name: "sufyan", | ',' comma used for seperation
rollNUmber: 37200,
subject: "Pharmacology"
}

Now according to this example we must provide 3 things to inquirer and define them very clearly
[Short Question]
Q.1 Define Antibiotics?

Here the 'Q.1' is 'name'
The 'question, Define Antibiotics' is the 'message'
last but not the least, 'Short Question' is the 'type'

Real case example is given below
*/
// Define initial balance and PIN
let myBalance = 10000;
let myPin = 2003;
// Prompt user to enter PIN
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your PIN:",
        type: "number",
    },
]);
// Check if entered PIN matches the predefined PIN
if (pinAnswer.pin === myPin) {
    console.log("Correct PIN Code!");
    // Prompt user to select operation (Withdraw or Check Balance)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option:",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    // Perform operation based on user's choice
    if (operationAns.operation === "Withdraw") {
        // Prompt user to enter withdrawal amount
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the withdrawal amount:",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Transaction successful. Your remaining balance is: " + myBalance);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCashAmount = 2500; // Predefined amount for fast cash (can be adjusted)
        if (fastCashAmount > myBalance) {
            console.log("Insufficient balance for Fast Cash!");
        }
        else {
            myBalance -= fastCashAmount;
            console.log("Fast Cash transaction successful. Your remaining balance is: " +
                myBalance);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        // Display current balance
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect PIN Code!");
}
