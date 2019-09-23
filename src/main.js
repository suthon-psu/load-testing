const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send({ok: 1})
    }, 50)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))