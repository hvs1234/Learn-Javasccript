let arr1 = [1,2,3,4,5,6,7,8,10,2]
let arr2 = [1,2,3,4,5,6,7,8,12,45]
let arr3 = [1,2,3,4,5,6,7,8,1,2,3]
let arr4 = [1,2,3,4,5,6,7,8,67,1,3657456]

let a1 = arr1.filter((value)=>{
    return value<8;
});
let a2 = arr2.filter((value)=>{
    return value<6;
});
let a3 = arr3.filter((value)=>{
    return value<10;
});
let a4 = arr4.filter((value)=>{
    return value<3;
});

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);