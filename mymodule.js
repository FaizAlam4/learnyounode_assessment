const fs = require("fs");
const path = require("path");
module.exports = function mymodule(dirPath, extension, callback) {
  fs.readdir(dirPath, (err, data) => {
    if (err) {
      return callback(err);
    }
    data = data.toString();
    let data1 = data.split(",");
    const myFile = data1.filter((ele) => path.extname(ele) === "." + extension);
    callback(null, myFile);
  });
};
