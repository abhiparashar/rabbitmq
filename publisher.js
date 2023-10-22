const amqp = require('amqplib');

const msg = { number: 19 }
connect()
async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672")
    const channel = await connection.createChannel()
    const result = await channel.assertQueue("jobs")
    await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
    console.log(`jobs sent successfully ${msg.number}`)
  } catch (error) {
    console.log(error)
  }
}