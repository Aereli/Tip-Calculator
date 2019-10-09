const readlineSync = require('readline-sync')
 
const userName = readlineSync.question('May I have your name? ')
console.log(`---------------------------- 
Hi ${userName}
----------------------------`)

const billAmount = Number(readlineSync.question(`How much was the Bill`))
const tipPercent = Number(readlineSync.question(`Bill at what percent?`))
const partySize = Number(readlineSync.question(`How many people in your party?`))

console.log(`The Bill is: ${billAmount.toFixed(2)}
 Percent amount: ${tipPercent.toFixed(2)} 
 Party size: ${partySize.toFixed(2)}`)

const tipAmount = (tipPercent / 100) * billAmount
const totalAmount = tipAmount + billAmount
const yourShare = totalAmount / partySize
console.log(`**********************************`)
console.log(`Total tip: ${tipAmount.toFixed(2)}
Total Bill: ${totalAmount.toFixed(2)} 
Your Share: ${yourShare.toFixed(2)}`)
