const express = require('express') 
const dotenv = require('dotenv') 
const connectDB = require('./config/db')
const userRoutes = require("./routes/useRoutes")

dotenv.config();
connectDB()
const app = express();
app.use(express.json());

app.use('/',(req, res) => {
res.send('api is working ')
})
app.use("/api/user", userRoutes)


const PORT = process.env.PORT || 3000

app.listen(3000, console.log(`serever is working on port ${PORT} `))