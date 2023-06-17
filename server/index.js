const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')

const PORT = process.env.PORT || 6000

const app = express()

app.use(fileUpload({}))
app.use(cors())
app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)


const start = async () => {
    try {
        mongoose.connect(process.env.BD_URL)
            .then(() => console.log('db is ok'))
            .catch((err) => console.log('DB error', err))
        app.listen(PORT, () => console.log(`server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()