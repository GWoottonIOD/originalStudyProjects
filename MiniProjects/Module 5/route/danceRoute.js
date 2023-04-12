const express = require('express') //require express 
const router = express.Router(); //require express.Router
let danceController = require('../controllers/danceController')// imports controller functions 

router.get('/getVideos', (req, res) => { // /test is where in /routes will listen for
    danceController.fetchVideos(req,res)//controllerName.functionName(req,res) because using MVC
    })

router.post('/addVideo', (req, res) => { // /test is where in /routes will listen for
    danceController.addVideo(req,res)//controllerName.functionName(req,res) because using MVC
    })

    module.exports = router //exports router to index.js