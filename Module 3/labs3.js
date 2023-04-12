function makeCounter2() {
    let count = 0;
   
    function counter() {
      return count++;
    }
   
    counter.set = value => count = value;
   
    counter.decrease = () => count--;
   
    return counter;
  }

// function decCounter() {

// }

let counter = makeCounter2();
let counter2 = makeCounter2();

console.log(counter.set(5));
counter.decrease()
console.log(counter())

console.log(counter2());
console.log(counter2()); // Question 1 - 0,1 0,1

//question 2

//question 3

function printNumbers() {
        setInterval(function() {
            for (let i=0; i<5; i++) {
            console.log(i);}
    }, 2000);
}


console.log(printNumbers())

//question 6

//Question 6

