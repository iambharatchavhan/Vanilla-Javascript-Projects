// Repeat yourself in certon amt of time

const body = document.querySelector("body");
const btn  = document.querySelector("#btn");


function randomColors (){
//    let red = Math.floor(Math.random() * 999) +100;
   let blue= Math.floor(Math.random() * 999) +10;
   let green = Math.floor(Math.random() * 999) +100;
//    let angle = Math.floor(Math.random() * 360) +30 ;
    // console.log(red ,blue,green);

    colors = `linear-gradient( 90deg ,#${blue},#${green})`
    // console.log(colors);
    body.style.background = colors ;
    //  console.log(but);
//    console.log(hello);
}

setInterval(randomColors, 1000)


