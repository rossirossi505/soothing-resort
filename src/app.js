const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000 

const app = express()

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))


app.get('', (req, res)=>{ 
res.send('Hello Express')
})

app.listen(port,() => {
console.log('Server is no port 3000.')
})