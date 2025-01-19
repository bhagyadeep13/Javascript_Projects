// API 
//const URL = 'https://api.assemblyai.com'

const URL = 'https://goweather.herokuapp.com/weather/Australia';  // api for weather
let text = document.getElementById("text")

async function demo() 
{
    console.log("fetching data......")
    let response = await fetch(URL);  // again its a async function pehle ye chale phir aage bade
    console.log(response) // JSON format
    var data = await response.json(); // JSON FORMAT -- JS OBJECT (READABLE)
    console.log(data) // print the facts in js object format 
    text.innerText = data.temperature
}

let btn = document.querySelector("button")
btn.addEventListener("click",demo)





