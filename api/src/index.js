const express = require('express')
const router = require('./router/worldcup.router.js')

const PORT = 8087
const app = express()

app.use(express.json())
app.use('/api/v1/worldcup', router)

app.listen(PORT, () => console.log(`Server up on PORT ${PORT}. To open access http://localhost:8087/api/v1/worldcup`))