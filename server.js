const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Il fait beau !'))

app.all('*', (req, res) => res.status(500).send('You are so bad man'))

app.listen(8888, () => {
    console.log("Server started on port 8888")
})