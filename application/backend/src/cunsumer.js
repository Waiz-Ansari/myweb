const amqp = require("amqplib/callback_api")
amqp.connect("amqp://localhost",(err,connection)=>{
    if (err) {
        throw err;
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err;
        }
        let queName = "technical";
        channel.assertQueue(queName,{
            durable:false
        });
        channel.consume(queName,(msg)=>{
            console.log(`recieved : ${msg.toString()}`);
            channel.ack(msg);   
        })
    })
})