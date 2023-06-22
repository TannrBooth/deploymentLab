const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`public`))
app.listen(4000, () => console.log(`server running on 4000`))
