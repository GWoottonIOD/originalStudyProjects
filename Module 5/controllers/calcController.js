const Calculator = require('./libraries/calculator');
let myCalc=new Calculator()
// myCalc.add(3,4) 

// class calculateController{

//     constructor(){
//         function add(num1,num2){
//             return num1+num2
//         }
//     }
// }

// let calcObj = new calculateController()
// calcObj.add(5,10)

const addNumbers = (req, res) => { // /test is where in /routes will listen for
    let number1=parseInt(req.query.num1); //this is all logic (whole file)
    let number2=parseInt(req.query.num2);
    console.log(number1)
    if (number1 == 0 || number2 == 0) { // || is or in JS and is &&
        res.status(666)
    }
    else if (isNaN(number1) || isNaN(number2)) { // else if for a second/ subsequent condition(s)
        res.status(626)
    }
    else { res.status(200)};
    let sum=myCalc.add(number1,number2)
    console.log(sum)
    res.json({result:sum})
    }

const subNumbers = (req, res) => { // /test is where in /routes will listen for
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2)
    try{
        myCalc.subtract(number1,number2)
    }
    catch (error) {res.status(66)}
    let sum=myCalc.subtract(number1,number2)
    res.json({result:sum})
    }

const mulNumbers = (req, res) => { // /test is where in /routes will listen for
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2)
    let sum=myCalc.multiply(number1,number2)
    res.json({result:sum})
    }

const divNumbers = (req, res) => { // /test is where in /routes will listen for
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2)
    let sum=myCalc.divide(number1,number2)
    res.json({result:sum}) // exports above script into a JSON file able to be interpreted by index.js
    }

    //in address bar put: http://localhost:3000/calculatorRoute/multiply?num1=20&num2=38

module.exports = {
    addNumbers,
    subNumbers,
    mulNumbers,
    divNumbers
} // exports router information to index.js