const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            maxPoolSize: 50,
            wtimeoutMS: 2500,
            useNewUrlParser: true,
          })
        console.log(`DB connected${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit()
    }
}
module.exports = connectDB
