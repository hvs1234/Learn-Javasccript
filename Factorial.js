f = ()=>
{
   var num = document.getElementById('number').value;
   var fact=1;
   if(num<0) 
   {
        alert("Number is negative"); return -1;
   }
   else if(num === 0) document.getElementById('set').innerHTML = `Factorial of ${num} is: 1`;
   else
   {
        for(var i=1;i<=num;i++)
        {
             fact = fact*i;
        }
   }
   document.getElementById('set').innerHTML =  `Factorial of ${num} is: ${fact}`;
}
