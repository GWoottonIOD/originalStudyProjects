const cars = ["Ferrari", "Lamborghini", "Pagani", "Bugatti"];
const italiancars = cars.slice(0,3);

console.log(italiancars)

cars.splice(1,1, "Ford", "Chevrolet") 

console.log(cars)

const str ='john'

function ucFirst (str) {
    let Chr = str.charAt(0);
    let Rst = str.substring(1);
    Chr = Chr.toUpperCase();
    return Chr+Rst;
}

console.log(ucFirst(str))

//function truncate (str, maxlenth)

const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles)
styles.splice(1,1, "Classics");
console.log(styles)
styles.shift()
console.log(styles)
styles.unshift("Rap", "Reggae")
console.log(styles)


const camel = 'border-left-width'

camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }


console.log(camelize(camel))

let planets = ['Mercury', 'Mercury','Earth', 'Earth', 'Earth', 'Saturn', 'Saturn', 'Neptune'];

let unique = [...new Set(planets)]

console.log(unique);


let map = new Map();

map.set ('name', 'John');

console.log(map)
const keys = [...map.values()];// keys iteration -> array
console.log(keys)

keys.push('moon'); // adds to the array
console.log(keys) 

let lengthOfText = 10
let trunc = "what I'd like to tell on this topic is:"
let myTruncatedString = trunc.substring(0, lengthOfText);

console.log(myTruncatedString)

const salaries = {
    'John':100,
    'Pete':80,
    'Mary':300,
    'Alan':250,
}

let resultN = Object.entries(salaries)
console.log(typeof (resultN));

// let keyArray = Object.keys(salaries);
// let valueArray = Object.values(salaries);
// console.log(typeof (keyArray))
// console.log(typeof (valueArray))

console.log(Array.isArray(resultN))

console.log(typeof (resultN))
function sumSalaries(resultN) {
    let sumSalaries = 0;
    for (const [name, salary] of resultN) {
        console.log('Name: ' + name + 'Value: '+ salary);
        sumSalaries = sumSalaries + salary;
        // if(salary === undefined){
        //     salary === 0;
        // }
    }
    return sumSalaries;
}

console.log(sumSalaries(resultN))

const maxSal = resultN.sort((x,y) => y[1] - x[1])[0];

console.log(maxSal)

// function topSalary(salaries) {
//     for ( const [key, value] of Object.entries(salaries)) {
//         console.log(`${key}:${value}`);
//         Object.keys(salaries).reduce(topSalary(key, value) => salaries[keys] > salaries[value] ? keys : value)
//     }
//     return topSalary
// }

// topSalary(salaries)

function getSecondsToday() {
    const sec = new Date();
    return sec.getHours() * 3600 + sec.getMinutes() * 60 + sec.getSeconds();
}

console.log(getSecondsToday())

let room = {
    number: 23
};

let meetup = {
    title: 'conference',
    occupiedBy: [{name: 'John'}, {name: 'Alice'}],
    place: room
}

room.occupiedBy = meetup;
meetup.self = meetup;
console.log(JSON.stringify(meetup, function replacer(key, value){
    if(key && value == meetup){
        return value.toString();
    }
    else{
        return value;      
    }
}))

