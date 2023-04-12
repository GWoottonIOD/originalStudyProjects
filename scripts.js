function random6() {
    let x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("result6").innerHTML = x;
    if (x>6) {
        alert("eroor");
    }
    else if (x<1) {
        alert("error");
    }
    else {
        console.log("mean")
    }
}

function random10() {
    let x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("result10").innerHTML = x;
    if (x>10) {
        alert("eroor");
    }
    else if (x<1) {
        alert("error");
    }
    else {
        console.log("mean")
    }
}
