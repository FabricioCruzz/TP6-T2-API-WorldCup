const express = require('express')
const router = require('./router/worldcup.router.js')
const { sequelize } = require('./model')

const PORT = 8087
const app = express()

app.use(express.json())
app.use('/api/v1/worldcup', router)

// sequelize.sync().then( () => {
//     console.log(`Conectado com o banco`) 
// })

app.listen(PORT, () => console.log(`Server up on PORT ${PORT}. To open access http://localhost:8087`))