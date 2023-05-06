function sum(a , b)
{
    return a + b;
}
function sub(a , b)
{
    return a-b;
}
function mul(a , b)
{
    return a*b;
}
function div(a , b)
{
    if(b==0) console.log("Zero Division Error!!!");
    return a/b;
}

const prompt = require("prompt-sync")();
var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
let choice = prompt("Enter choice from [+,-,*,/]: ");
switch(choice)
{
    case '+':
        console.log(`Sum of ${num1} + ${num2}: `,sum(num1,num2)); break;
    case '-':
        console.log(`Subtract of ${num1} - ${num2}: `,sub(num1,num2)); break;
    case '*':
        console.log(`Multiply of ${num1} x ${num2}: `,mul(num1,num2)); break;
    case '/':
        console.log(`Division of ${num1} / ${num2}: `,div(num1,num2)); break;
    default:
        console.log("Invalid Choice!"); break;
}