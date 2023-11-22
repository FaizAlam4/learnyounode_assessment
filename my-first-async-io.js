const fs = require("fs");

let arr = process.argv;

fs.readFile(arr[2],(err, data) => {
  if (data) {
    data = data.toString();
    contentArr = data.split("\n");
    console.log(contentArr.length - 1);
  }

 
});
