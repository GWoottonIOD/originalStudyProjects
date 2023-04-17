const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');


const express = require('express')
//const testRoute = require('./routes/myTestRoute')
const calculatorRoute = require('./app/routes/calculatorRoute')
// const router = express.Router();
const app = express()
// const app = swaggerUi
const port = 3000
app.use('/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
app.use('/calculatorRoute', calculatorRoute) //http://localhost:3000/calculatorRoute/



app.use('/', express.static('public')) //where the server will be hosted on
// server.use('/static', express.static('public'))

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`) //
})

// app1.get('/', (req, res) => {
// res.send('Hello World 8080!')
// })
    
// app1.listen(port1, () => {
// console.log(`Example app listening at http://localhost:${port1}`)
// })