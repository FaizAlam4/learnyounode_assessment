const http = require("http");
let url = process.argv[2];

http.get(url, (res) => {
  let data = "";
  res.on("data", (ele) => {
    data += ele;
  });

  res.on("end", () => {
    console.log(data.length);
    console.log(data);
  });

  res.on("err", (err) => {
    console.log(err);
  });
});
