// Repeat yourself in certon amt of time

const body = document.querySelector("body");
const btn  = document.querySelector("#btn");
const btnTwo  = document.querySelector("#btn2");
const theH1 = document.querySelector(".h1");


function randomColors (){
   let red = Math.floor(Math.random() * 999) +100;
   let blue= Math.floor(Math.random() * 999) +10;
   let green = Math.floor(Math.random() * 999) +100;
//    let angle = Math.floor(Math.random() * 360) +30 ;
    // console.log(red ,blue,green);

    colors = `linear-gradient( to left,#${blue},#${red})`
    // console.log(colors);
    body.style.background = colors ;
    //  console.log(but);
//    console.log(hello);
}

const theId = setInterval(randomColors, 1000)

btn.addEventListener('click', function(){
    console.log("clicked");
    theH1.textContent = colors;
   clearInterval (theId);
})

btnTwo.addEventListener("click",function(){
    window.location.reload()
})


