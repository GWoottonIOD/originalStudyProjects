const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const express = require('express')
const danceRoute = require('./route/danceRoute')
const app = express()
const port = 4000

app.use('/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);



app.use('/', express.static('public'))
app.use(express.json());
app.use('/danceRoute', danceRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`) //
    })