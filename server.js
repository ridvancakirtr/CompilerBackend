const express = require('express')
var cors = require('cors')
const app = express()
const PORT = 3000

app.use(express.json());
app.use(cors({ origin: ["http://localhost:8080"], credentials: true }));
app.get('/', (req, res) => {
    res.send('COMPILER API WORKING...')
})

//Route files
const compiler = require('./routes/compiler')

//Mount files
app.use('/api/v1/compiler', compiler);


app.listen(PORT, () => {
    console.log(`Success app listening at http://localhost:${PORT}`)
})