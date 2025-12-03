let userName="Alice";
let initialBalance=1000;
let amountAdded=500;
let amountSpent=700;
function updateWallet(name,balance,added,spent){
    return(name==="guest")?"Access Denied":(balance+added-spent);
}
let finalBalance=updateWallet(userName,initialBalance,amountAdded,amountSpent);
console.log("FinalBalance:",finalBalance);
console.log("Is Balance  greater then zero?",finalBalance>=0);
console.log("Type of final Balance:",typeof finalBalance);                                                                     