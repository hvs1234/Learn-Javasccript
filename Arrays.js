function bubblesort(arr)
{
    var len = arr.length;
    for(let i=0;i<len;i++)
    {
        for(let j=0;j<len-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

const prompt = require("prompt-sync")();
let input = prompt("Enter values in array: ");
let arr = input.split(",");
console.log("Given array is: ",arr);
bubblesort(arr);
console.log("Array after sorting: ",arr);