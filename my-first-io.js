const fs =require('fs');
let arr=process.argv;
let content=fs.readFileSync(arr[2],'utf-8');
let NOL=content.split('\n');
console.log(NOL.length-1);