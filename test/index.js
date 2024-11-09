const express = require('express')
const app = express()
const port = 3000


const userRoutes = require('./routes/userRoutes')
const calculatorRoutes = require("./routes/calculatorRoutes")

app.use("/calculator", calculatorRoutes)
app.use('/users', userRoutes)

app.use('/', express.static('public'))

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})