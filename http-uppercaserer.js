const http=require('http')

let server=http.createServer((request,response)=>{
if(request.method=='POST'){
    let data='';
    request.on('data',(ele)=>{
        data+=ele;
    }
    )
    request.on('end',()=>{
        data=data.toUpperCase()
     response.end(data);
    })

    request.on('err',(err)=>{
console.log("There is an error:",err);
    })
}
})

server.listen(process.argv[2],()=>{"Server started..."})