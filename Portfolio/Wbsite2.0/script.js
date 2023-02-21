const btn = document.querySelector("#btnclick");
const head = document.querySelector("#header");
const para = Array.from(document.querySelectorAll(".para")) 
const brgr = Array.from(document.querySelectorAll(".burger")) 
const logotxt = document.querySelector(".logotexth")

console.log( brgr);

// console.log(para);
// logotextv
// console.log(para)

btn.addEventListener('click',function(){
     console.log("clicked");
     head.classList.toggle('head');
     logotxt.classList.toggle('logotextv');
     para.forEach(element => {
        element.classList.toggle('para2');
     });
    
     brgr.forEach(element => {
        element.classList.toggle('coolbrger');
     });
     
    //  head.style.width = '200px';
    
})
