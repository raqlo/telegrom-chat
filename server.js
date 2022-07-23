require("dotenv").config();
const express = require('express');
const app = express();
const server = require('http').Server(app)

const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');
// const router = express.Router()

// const router = require('./components/Messages/network')
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.osmsq8l.mongodb.net/?retryWrites=true&w=majority`;
db(URI)

app.use(bodyParser.json())
// app.use(router);
router(app)

app.use('/app', express.static('public'))

// res.send();  //vacia
// res.status(201).send('Hola ' + req.body.name);  //plana
// res.status(201).send({    //Estructurada - array, objetos
//     error: '',
//     body: 'Creado correctamente'
// });



// app.use('/', function (req, res) {
//     res.send('hola')
// })

app.listen(3000)
console.log('listening')

