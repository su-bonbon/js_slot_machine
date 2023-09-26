// 1. Depot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again.


const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

//this works as switch cases
const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
}

const SYMBOLS_VALUES = {
    A : 5,
    B : 4,
    C : 3,
    D : 2
}







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

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || (numberBet <= 0 ) || (numberBet > (balance / lines))) {
            console.log("Invalid bet, try again.")
        } else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0l j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }
    return rows;
}
    

console.log(reels);
let balance = deposit();  //if i use let i can change the value later
const numberofLines = getNumberofLines();  //if i use const i cannot change the value later
const bet = getBet(balance, numberofLines);
const reels = spin();
const rows = transpose(reels);
console.log(reels);
console.log(rows);