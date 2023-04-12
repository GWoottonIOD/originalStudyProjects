//why are these functions in a script file instead of a controller or library 
//like the calculator? - logic is populating HTML with content, can't do that from a controller unless using a template engine
//Why arent these functions in classes? jo: you could do that, it's just a different way of structuring code

let skillLevel = 'beginner'

function fetchVideos() {
    console.log('fetching videos')
    fetch('http://localhost:4000/danceRoute/getVideos?skillLevel='+ skillLevel)//terminal json-server dance.json
    .then((response) => response.json())
    .then((vids) => {console.log(vids); videoTemplate(vids)}) //this works because the function newscars is not defined by let or const
    .catch ( //catch an error through a function then console log the error
        (e) => console.log(e)
        ); 
        console.log("did we catch?")
}
// let field = 'q';
// let url = window.location.href;

function beginnerPage(){
    let titleGrab = document.getElementById('title');
    skillLevel = 'beginner';
    let upperSkill = skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1);
    titleGrab.innerText=upperSkill
}

function intermediatePage(){
    let titleGrab = document.getElementById('title');
    skillLevel = 'intermediate';
    let upperSkill = skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1);
    titleGrab.innerText=upperSkill
}

function advancedPage(){
    let titleGrab = document.getElementById('title');
    skillLevel = 'advanced';
    let upperSkill = skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1);
    titleGrab.innerText=upperSkill
}

function videoTemplate(vids) {
    // console.log(vids)
    // let level = document.getElementById('title').innerHTML //gets the title of the link query clicked
    let temp = document.getElementById('temp'); //template is stored in temp
    document.getElementById('here').innerText= "";
    let beginn = vids.filter(vid=>vid.skill== skillLevel); // 
    for (let i of beginn) { //cycles through each item in the next news card
        clon = temp.content.cloneNode(true);    // clones the template
        let danceVid = clon.querySelector('video source');
        //let danceVid= clon.getElementById("videos");
        danceVid.src = i.source;
        clon.querySelector('.card-title').innerText=i.title;  //inserts title from object array into 'card-title'
        clon.querySelector('.card-text').innerText=i.description; // insers content from object array into 'card-text'
        document.getElementById('here').appendChild(clon); // implements the changes
    }
}

async function addVideoTo() {
    console.log('startedaddVideoTo') // handy console.log 
    let z = document.getElementById('dropDownFiles').value //selects the video to be added
    let w = document.getElementById('dropDownSkill').value // selects the skill of the video
    if (w != skillLevel) {
        alert('error');
        throw new Error('ERROR')
    }
    else {
        console.log('success')
    }
    z;
    let x = document.getElementById('videoTitle').value; //gets the inputted dance title
    let y = document.getElementById('videoDescription').value;    //gets the inputted description
    let beginn1={source: z,title: x, description: y, skill: w};
    await postData('http://localhost:4000/danceRoute/addVideo', beginn1) //now posting to the express server on port 4000 via routes!
    .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    }).catch (
        (e) => console.log(e)
        );  
    //beginn.push(beginn1); 
}

setInterval(fetchVideos, 60000)
fetchVideos()

// Example POST method implementation:
async function postData(url = '', data = {}) {
// Default options are marked with *
const response = await fetch(url, {
method: 'POST', // *GET, POST, PUT, DELETE, etc.
headers: {
  "Content-type": "application/json; charset=UTF-8"
},
body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return response.json(); // parses JSON response into native JavaScript objects
}
    //in address bar put: http://localhost:3000/calculatorRoute/multiply?num1=20&num2=38