const heading1 = document.getElementById('heading1')
const heading2 = document.getElementById('heading2')
const heading3 = document.getElementById('heading3')
const heading4 = document.getElementById('heading4')
const heading5 = document.getElementById('heading5')
const heading6 = document.getElementById('heading6')
const heading7 = document.getElementById('heading7')
const heading8 = document.getElementById('heading8')
const heading9 = document.getElementById('heading9')


/**
setTimeout(()=>{
    heading1.textContent="one second"
    heading1.style.color="red";
},1000);

setTimeout(()=>{
    heading2.textContent="Two second"
    heading2.style.color="green";
},1000);

*/

//^ if we did like this we can not do task one bye one
//* solution
// setTimeout(() => {
//   heading1.textContent = 'one second'
//   heading1.style.color = 'red'
//   setTimeout(() => {
//     heading2.textContent = 'Two second'
//     heading2.style.color = 'green'
//     setTimeout(() => {
//       heading3.textContent = 'Three second'
//       heading3.style.color = 'blue'
//       setTimeout(() => {
//         heading4.textContent = 'Four second'
//         heading4.style.color = 'pink'
//         setTimeout(() => {
//           heading5.textContent = 'Five second'
//           heading5.style.color = 'yellow'
//           setTimeout(() => {
//             heading6.textContent = 'Six second'
//             heading6.style.color = 'purple'
//           }, 5000)
//         }, 2000)
//       }, 3000)
//     }, 1000)
//   }, 2000)
// }, 1000)

//!code is like to hard to maintain and understand
//! but as we see this code started to grow horizontally
//! AsA very hard to manage and read also  called pyramid of doom

//!now will try to make it using function

// function pyramidOfDoom (element, text,color,time) {
//   setTimeout(() => {
//                 element.textContent = text;
//                 element.style.color = color;
//               }, time)
// }
// pyramidOfDoom(heading1,"Changed by function","blue",1000);

// if want to handle error

function pyramidOfDoom(element, text, color, time,  okCallback,failCallback) {
  setTimeout(() => {
    if (element) {
      element.textContent = text
      element.style.color = color
      okCallback()
    } else {
      if (failCallback){
        failCallback();
      }
    }
  }, time)
}
//^ two callbacks are passed using arrow func 
//& pyramidOfDoom(heading1, 'Changed by function', 'blue', 1000, ()=>{},()=>{})

pyramidOfDoom(heading1, 'Changed by function', 'blue', 1000, ()=>{
 pyramidOfDoom(heading2, 'Changed by function r', 'red', 1000, ()=>{
  pyramidOfDoom(heading3, 'Changed by function ', 'brown', 1000, ()=>{
    pyramidOfDoom(heading4, 'Changed by function ', 'green', 1000, ()=>{
      pyramidOfDoom(heading5, 'Changed by function p', 'pink', 1000, ()=>{
        pyramidOfDoom(heading6, 'Changed by function ', 'yellow', 1000, ()=>{
         pyramidOfDoom(heading7, 'Changed by function gre', 'grey', 1000, ()=>{
            pyramidOfDoom(heading8, 'Changed by function go', 'aqua', 1000, ()=>{
              pyramidOfDoom(heading9, 'Changed by function get', 'blue', 1000, ()=>{

               },()=>{ console.log("heading9 Does not exist please check");})  
             },()=>{console.log("heading8 Does not exist please check");})
           },()=>{console.log("heading7 Does not exist please check");})
         },()=>{ console.log("heading6 Does not exist please check");})
       },()=>{console.log("heading5 Does not exist please check");})
     },()=>{console.log("heading4 Does not exist please check");})
   },()=>{console.log("heading3 Does not exist please check");})
 },()=>{console.log("heading2 Does not exist please check");})
},()=>{console.log("heading1 Does not exist please check");})


// t0 avoid this we need to learn promises 