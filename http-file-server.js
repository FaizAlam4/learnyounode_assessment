const http=require('http')
const fs=require('fs')

let server=http.createServer((reqest,response)=>{
let file=fs.createReadStream(process.argv[3]);
file.pipe(response);
})

server.listen(process.argv[2])