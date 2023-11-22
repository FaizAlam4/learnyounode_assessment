let inputVal=process.argv;



// console.log(inputVal)
let sum=0;
for(let i=2;i<inputVal.length;i++){
sum+=Number(inputVal[i]);
}
console.log(sum)