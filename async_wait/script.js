/*console.log("one")               
console.log("two")

function hello()                       //Asynchronous programming
{                                     // code ka flow block nhi hona chahiye
    console.log(`hello`);
}

setTimeout(hello,2000); // 2 sec wait

console.log("three")
console.log("four")

/**************************************************************** */

//Callback function--it is a function which is passed as an argument to other function

// Example - setTimeout function is a callback function

/*function sum(a,b)
{
    console.log(a+b);
}
function calculator(a,b,sum)
{error
    sum(a,b)
}
calculator(1,2,sum)

/**************************************************************** */

/* function getData(dataIdx)  // code act as an API that gives data after 2 Sec of specific dataindex
{                                           
    setTimeout(function()
{
    console.log("data", dataIdx)
},2000)
}
getData(10) */

/**************************************************************** */

// PROMISES
 
/* let promise = new Promise((resolve,reject)=>  // Generate the error
{
    console.log("Its is promise");
    reject("error occured")
}) */

/*     let promise = new Promise((resolve,reject)=>  // Promise resolved(fullfilled) 
{
    console.log("Its is promise");
    resolve("success")
})  */
/**************************************************************** */

// USE OF PROMISES
/*
function getData(dataIdx)  // code act as an API that gives data in form of PROMISES
{        
    return new Promise((resolve,reject)=>
    {
        setTimeout(function()
        {
            console.log("data", dataIdx)
            resolve("success")
        },3000)
    })                                   
}

let promise = getData(123)
promise.then((res)=>            // this run when promise resolve
{
    console.log("success")
})
*/

// reject

/*function getData(dataIdx)  // code act as an API that gives data in form of PROMISES
{        
    return new Promise((resolve,reject)=>
    {
        setTimeout(function()
        {
            console.log("data", dataIdx)
            reject("Some error Occured")
        },3000)
    })                                   
}

let promise = getData(123)
promise.catch((res)=>
{
    console.log(res);
})
*/
/**************************************************************** */

// METHOD - 2 (PROMISES CHAINING)

/*function getData(dataIdx)  // code act as an API that gives data in form of PROMISES
{        
    return new Promise((resolve,reject)=>
    {
        setTimeout(function()
        {
            console.log("data", dataIdx)
            resolve("success")
        },3000)
    })                                   
}

console.log("fetching data1....")       // promise chaining
let p1 = getData(1);
p1.then((res)=>
{
    console.log("fetching data2....")
    let p2=getData(2);
    p2.then((res)=>{

    })
})
*/

/**************************************************************** */

// METHOD --3 (ASYNC AWAIT)

function getData(dataIdx)  // code act as an API that gives data in form of PROMISES
{        
    return new Promise((resolve,reject)=>
    {
        setTimeout(function()
        {
            console.log("data", dataIdx)
            resolve("success")
        },3000)
    })                                   
}

async function getAllData()
{
    await getData(1);
    await getData(2);
}