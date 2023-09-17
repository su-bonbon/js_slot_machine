// 1. Depot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again.


const prompt = require("prompt-sync")();
// function deposit() {
//     return 1
// }
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || (numberDepositAmount <= 0)) {
            console.log("Invalid deposit amount, try again.")
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberofLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberofLines = parseFloat(lines);

        if(isNaN(numberofLines) || (numberofLines <= 0 ) || (numberofLines > 3)) {
            console.log("Invalid number of lines, try again.")
        } else {
            return numberofLines;
        }
    }
}

const depositAmount = deposit();
const numberofLines = getNumberofLines();
console.log(depositAmount);
