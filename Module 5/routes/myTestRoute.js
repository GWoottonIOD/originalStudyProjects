const express = require('express') //require exports 
const router = express.Router();
let calcController = require('../controllers/calcController') //.. means one folder back

router.get('/calc', (req,res) => {
    calcController.addNumbers(req,res)
})

// router.get('/test', (req, res) => { // /test is where in /routes will listen for
//     res.send('TestRoute Hello')
//     })

// router.get('/test', (req, res) => { // /test is where in /routes will listen for
//     res.send('TestRoute Hello')
//     })

module.exports = router