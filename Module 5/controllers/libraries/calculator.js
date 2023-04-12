const Logger = require("./logger")

class Calculator{
    constructor() {
        this.logger = new Logger()
    }
    add(num1,num2) { // public method
        const value=num1+num2
        this.logger.log(value)
        // if (number1 == 0 || number2 == 0) { // || is or in JS and is &&
        //     res.status(666) //function doesn't know what res is.
        // }
        // else if (isNaN(num1) || isNaN(num2)) { // else if for a second/ subsequent condition(s)
        //     res.status(626)
        // }
        // else { res.status(200)};
        return value;
    }
    subtract(num1,num2) { // public method
        const value=num1-num2
        // const error = 'flip'
        this.logger.log(value)
        // if (num1 == 0 || num2 == 0) { // || is or in JS and is &&
        //     throw (error)
        // }
        return value;
    }
    multiply(num1,num2) { // public method
        const value=num1*num2
        this.logger.log(value)
        return value;
    }
    divide(num1,num2) { // public method
        const value=num1/num2
        this.logger.log(value)
        return value;
    }
}



module.exports=Calculator