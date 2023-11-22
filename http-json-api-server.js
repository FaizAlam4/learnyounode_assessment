"use strict";

const http = require("http");
const url = require("url");
let server = http.createServer((request, response) => {
  let myUrl = new URL(request.url, `http://${request.headers.host}`);
  let path = myUrl.pathname;
  if (path == "/api/parsetime") {
    let query = myUrl.search;
    console.log(query);
    let isoDate = query.split("=")[1];
    console.log(isoDate);

    //converting iso date to normal form

    let date = new Date(isoDate);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let obj = {};
    obj["hour"] = hour;
    obj["minute"] = minute;
    obj["second"] = second;

    let jsonObj = JSON.stringify(obj);

    console.log(jsonObj);
    response.end(jsonObj);
  }
  if (path == "/api/unixtime") {
    let query = myUrl.search;
    console.log(query);
    let isoDate = query.split("=")[1];


    let date = Date.parse(isoDate);
 

    let obj={};
    obj['unixtime']=date;
    let objJson=JSON.stringify(obj)
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(objJson)
  }
});

server.listen(process.argv[2], () => {
  console.log("Server started....");
});
