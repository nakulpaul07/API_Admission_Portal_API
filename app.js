const express= require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const port = 5000
const web = require('./routes/web')



// for connectivity to react
const cors = require('cors')
app.use(cors())




// Connect to maongoose
const connectDbs = require('./db/connectdb')
connectDbs()

// fileuploader for image
const fileuploader = require('express-fileupload')

// call function of fileuploader
app.use(fileuploader({ useTempFiles: true }))

// for dataget in ap (change formate)
app.use(express.json())



const cookieParse = require('cookie-parser')

// token gET
app.use(cookieParse());



// load route
app.use('/api', web)
// Localhost:4000/api



// server create
app.listen(port, () => console.log("server start localhost : 5000"))
