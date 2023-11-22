const mymodule = require("./mymodule.js");

let dirPath = process.argv[2];
let extension = process.argv[3];

mymodule(dirPath, extension, (err, data) => {
  if (err) {
    console.log("There is a problem");
  }

  for (let obj of data) {
    console.log(obj);
  }
});
