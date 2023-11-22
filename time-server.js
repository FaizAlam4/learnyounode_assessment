const net = require('net')  
const server = net.createServer(function (socket) {  
    let dt=new Date();
    let year=dt.getFullYear().toString();
    let day=dt.getUTCDate().toString().padStart(2,'0');
    let month=(dt.getMonth()+1).toString().padStart(2,'0');
    let hour=dt.getHours().toString().padStart(2,'0');
    let min=dt.getMinutes().toString().padStart(2,'0');
    let f1=year+"-"+month+"-"+day+" "+hour+":"+min;
  // socket handling logic  
  socket.write(f1+'\n')
  socket.close()
})  
server.listen(Number(process.argv[2]),()=>{console.log("server running....")})  