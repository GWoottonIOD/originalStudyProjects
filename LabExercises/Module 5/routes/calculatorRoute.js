const express = require('express') //require exports 
const router = express.Router();
let calcController = require('../controllers/calcController') 

router.get('/add', (req, res) => { // /test is where in /routes will listen for
    // let number1=parseInt(req.query.num1);
    // let number2=parseInt(req.query.num2)
    // let sum=number1+number2
    // res.json({result:sum})
    calcController.addNumbers(req,res)
    // calcController.#log(req,res) //cannot call #function because it is a private tag
    })

router.get('/subtract', (req, res) => { // /test is where in /routes will listen for
    // let number1=parseInt(req.query.num1);
    // let number2=parseInt(req.query.num2)
    // let sum=number1-number2
    // res.json({result:sum})
    calcController.subNumbers(req,res)
    })

router.get('/multiply', (req, res) => { // /test is where in /routes will listen for
    // let number1=parseInt(req.query.num1);
    // let number2=parseInt(req.query.num2)
    // let sum=number1*number2
    // res.json({result:sum})
    calcController.mulNumbers(req,res)
    })

router.get('/divide', (req, res) => { // /test is where in /routes will listen for
    // let number1=parseInt(req.query.num1);
    // let number2=parseInt(req.query.num2)
    // let sum=number1/number2
    // res.json({result:sum}) // exports above script into a JSON file able to be interpreted by index.js
    calcController.divNumbers(req,res)
    })

    //in address bar put: http://localhost:3000/calculatorRoute/multiply?num1=20&num2=38

module.exports = router // exports router information to index.js