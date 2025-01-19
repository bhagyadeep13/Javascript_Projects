
const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

  /*for(codes in countryList) 
    {
        console.log(codes,countryList[codes])       // printing all codes
    }*/
const selects = document.querySelectorAll("select")

let btn = document.querySelector(".container button")

let msg = document.querySelector(".msg")
let fromCurr = document.querySelector(".from select")
let toCurr = document.querySelector(".to select")


for (let select of selects) 
    {
    for (let currCode in countryList) 
    {
        let newOption = document.createElement("option")
        newOption.innerText = currCode
        newOption.value =  currCode
        select.append(newOption)
        if(select.name==="from" && currCode==="USD")
        {
            newOption.selected="selected"
        }
        else
        if(select.name==="to" && currCode==="INR")
            {
                newOption.selected="selected"
            }

    }
    select.addEventListener("change",(evt)=>
    {
        updateFlag(evt.target); // jis bhi element me change aya ho vo target hota h
    })
}
function updateFlag(element) 
{
    let currCode = element.value
    let countrycode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src=newsrc
}

btn.addEventListener("click",async function(element)
{
    btn.style.opacity ="0.5"
    element.preventDefault();
    let amtval = document.querySelector(".amount input").value
    if(amtval==="" || amtval<1)
    {
        amtval=1;
        document.querySelector(".amount input").value = "1"
    }
    let fromCurrCode = fromCurr.value.toLowerCase(); // in api we use only lowercase
    let toCurrCode = toCurr.value.toLowerCase();

    const URL = `${BASE_URL}${fromCurrCode}.json`  // make anew url 
    let response = await fetch(URL);
    var data = await response.json();

    let rate = data[fromCurrCode][toCurrCode];
    console.log(fromCurrCode,rate)
    let totalval = rate*amtval;
    let newMsg = `${amtval} ${fromCurrCode.toUpperCase()} -- ${totalval} ${toCurrCode.toUpperCase()}`

    msg.innerText = newMsg  // change the new text
})


