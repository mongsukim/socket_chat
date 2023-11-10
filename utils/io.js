module.exports=function (io){
    io.on("connection", async(socket)=>{
        console.log('client is cocnnected', socket.id)

        socket.on("disconnect", ()=>{
            console.log('user is disconnected')
        })
    })
}