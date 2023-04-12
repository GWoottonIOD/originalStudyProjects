function addition() {
    let x= document.getElementById('first').value;
    let y= document.getElementById('second').value;
    x=parseInt(x);
    y=parseInt(y);
    let z= x+y;
    document.getElementById('result').value=z;
}

function minus() {
    let x= document.getElementById('first').value;
    console.log(x)
    let y= document.getElementById('second').value;
    console.log(y)
    x=parseInt(x);
    y=parseInt(y);
    let z= x-y;
    console.log(z)
    document.getElementById('result').value=z;
}

function multiply() {
    let x= document.getElementById('first').value;
    let y= document.getElementById('second').value;
    x=parseInt(x);
    y=parseInt(y);
    let z= x*y;
    document.getElementById('result').value=z;
}

function divide() {
    let x= document.getElementById('first').value;
    let y= document.getElementById('second').value;
    x=parseInt(x);
    y=parseInt(y);
    let z= x/y;
    document.getElementById('result').value=z;
}

function wipe() {
    document.getElementById('result').value=0;
}


