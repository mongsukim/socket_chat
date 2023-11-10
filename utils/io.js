module.exports=function (io){
    io.on("connection", async(socket)=>{
        console.log('client is ocnnected', socket.id)
    })
}