const fs = require("fs");
const path = require("path");
let arr = process.argv;
let dirPath = arr[2],
  extension = arr[3];

fs.readdir(dirPath, (err, data) => {
  if (err) {
    console.log("There is an error in directory path");
  }
  data = data.toString();

  let ans1 = data.split(",");
  let ans = ans1.filter((ele) => path.extname(ele) === "." + extension);
  // console.log(ans);
  for (let names of ans) {
    console.log(names);
  }
});
