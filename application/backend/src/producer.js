const amqp = require("amqplib/callback_api")
amqp.connect("amqp://localhost",(err,connection)=>{
    if (err) {
        throw err;
    }
    connection.createChannel((err,chanel)=>{
        if (err) {
            throw err;
        }
        let queName = "technical";
        let message = "this is technical babaji";
        chanel.assertQueue(queName,{
                durable:false
            });
            chanel.sendToQueue(queName,Buffer.from(message));
            setTimeout(() => {
                connection.close()
            }, 1000);
    
    })
    // let queName = "technical";
    // let message = "this is technical babaji";
    // channel.assertQueue(queName,{
    //     durable:false
    // });
    // channel.consume(queName,(msg) => {
    //     console.log(`recive:${msg.connect.toString()}`);
    //     channel.ack(msg)
    // })
})