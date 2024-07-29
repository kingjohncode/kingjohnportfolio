// 

// to solve this problem, you need to calculate the vault codes using math arithmetics and store them into variables.
// then displaywith a welcome messege tothe safe cracker with a secret combination- alert method
// 10-40-39

// 1. Calculate the factor for the first variable -10
const firstNum = 2 * 5; 

// 2. Calculate the difference for the second variable-40
const secondNum = 60 - 20;

// 3. Calculate the sum for the third variable-39
const thirdNum= 20 + 19;

// 4. create welcome messege that will display the safe cracker 
const string = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:${firstNum} - ${secondNum} - ${thirdNum}`; 

// 5. alert the user with the secret combination and welcome message
alert(string);