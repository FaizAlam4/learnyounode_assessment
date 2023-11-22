const http = require("http");

let url = process.argv[2];

http.get(url, (res) => {
  res.on("data", (bytes) => {
    console.log(bytes.toString());
  });

  res.on("end", (myData) => {
    // console.log(myData.toString());
  });

  res.on("err", (err) => {
    console.log(err);
  });
});
