// console.log("Hello");

// var name = prompt("what is your name?");


// alert("Hello This is " + name);

var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");

var calculate = document.querySelector(".calculate");

// console.log(principle);
// console.log(output);
// console.log(time);
// console.log(rate);
// console.log(calculate);

calculate.addEventListener('click',function calculateSI (){

    var SI = (principle.value*rate.value*time.value)/100;

    console.log(principle.value);
    console.log(SI);
    output.innerHTML = "Your Simple Interest is: " + SI;
});

// function calculateSI (){

//     var SI = (principle.value*rate.value*time.value)/100;

//     console.log(principle.value);
//     console.log(SI);
//     output.innerHTML = "Your Simple Interest is: " + SI;
// }