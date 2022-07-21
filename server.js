const express = require('express');
const bodyParser = require('body-parser');
// const router = express.Router()

// const router = require('./components/Messages/network')
const router = require('./network/routes');
const app = express();

app.use(bodyParser.json())
// app.use(router);
router(app)

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

