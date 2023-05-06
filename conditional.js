//Conditional Statements
const prompt = require("prompt-sync")();
let a = prompt("enter number: ");
if(a>0) console.log(a,"> 0");
else console.log(a,"< 0");
let val  = prompt("Enter the value from [1,2,3,4]: ");
switch(val)
{
    case '1':
        console.log("It is a first number!"); break;
    case '2':
        console.log("It is a second number!"); break;
    case '3':
        console.log("It is a third number!"); break;
    case '4':
        console.log("It is a fourth number!"); break;
    default:
        console.log("Invalid case! you are go upto 4"); break;
}