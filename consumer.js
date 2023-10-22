const amqp = require('amqplib');

connect()
async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672")
    const channel = await connection.createChannel()
    const result = await channel.assertQueue("jobs")
    channel.consume("jobs", (msg) => {
      const messageContent = msg.content.toString()
      console.log(messageContent)
      channel.ack(msg)
    })
    console.log("waiting for messages")
  } catch (error) {
    console.log(error)
  }
}