const btn = document.querySelector(".btn-brgr");
const head = document.querySelector("#header");
const para = Array.from(document.querySelectorAll(".para")) 
const brgr = Array.from(document.querySelectorAll(".burger")) 
const brgrMob = Array.from(document.querySelectorAll(".burger-mob")) 


const logotxt = document.querySelector(".logotexth")
const divBtn = document.querySelector(".btn-brgr-mob")
const headerOfMob = document.querySelector("#mobile-menu")

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

divBtn.addEventListener('click', function(){
   console.log("mobile-click");
   headerOfMob.classList.toggle("mob-menu-full");
   headerOfMob.classList.toggle("navigastion-mob2");

   brgrMob.forEach(element => {
        element.classList.toggle('burger-mob-two');
     });
})