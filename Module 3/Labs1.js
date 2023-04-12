let first = "" + 1 + 0
console.log(first)

let second = "" - 1 + 0
console.log(second)

let third = true + false
console.log(third)

let fourth = 6 / "3"
console.log(fourth)

let fifth = "2" * "3"
console.log(fifth)

let sixth = 4 + 5 + "px"
console.log(sixth)

let seventh = "$" + 4 + 5
console.log(seventh)

let eighth = "4" - 2
console.log(eighth)

let ninth = "4px" - 2
console.log(ninth)

let tenth = "  -9  " + 5
console.log(tenth)

let eleventh = "  -9  " - 5
console.log(eleventh)

let twelfth = null + 1
console.log(twelfth)

let thirteenth = undefined + 1
console.log(thirteenth)

let fourteenth = " \t \n" - 2
console.log(fourteenth)

let a = 1;
let b = 2;
//const prompt = require('prompt-sync')

function alab(a,b) {
    alert(a+b);
}

//alab(a+b)
console.log(a+b);

let fifteenth = 5 > 4
console.log(fifteenth)

let sixteenth = "apple" > "pinapple"
console.log(sixteenth)

let seventeenth = "2" > "12"
console.log(seventeenth)

let eighteenth = undefined == null
console.log(eighteenth)

let nineteenth = undefined === null
console.log(nineteenth)

let twentieth = null == "\n0\n"
console.log(twentieth)

let twentifirst = null === +"\n0\n"
console.log(twentifirst)

//if ("0") { //yes 
  //  alert( 'hello' );
//}
let c = 4

function result(a,c) {
    return (a + c < 4)  ? 'Below' : 'Over';
}

console.log(result(1, 2))
console.log(result(3, 4))

const helloW = ( who )=> console.log('hello ' + who);
function delay (d, s, w) {
    setTimeout (d, s, w);
}

delay(helloW, 300, 'world');

let e=3
let f=4

function addition (e,f) {
    return e*f;
}

console.log(addition(e,f)) //Q 7

let schedule = {}; 

function isEmptyScedule(){
    if(Object.keys(schedule).length === 0) {
        console.log('True')
    }
    else {
        console.log('False')
    }
}

isEmptyScedule() // Q 8

// Q 9

//Q 8

