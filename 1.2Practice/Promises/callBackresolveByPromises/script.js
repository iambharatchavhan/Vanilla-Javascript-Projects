const heading1 = document.getElementById('heading1')
const heading2 = document.getElementById('heading2')
const heading3 = document.getElementById('heading3')
const heading4 = document.getElementById('heading4')
const heading5 = document.getElementById('heading5')
const heading6 = document.getElementById('heading6')
const heading7 = document.getElementById('heading7')
const heading8 = document.getElementById('heading8')
const heading9 = document.getElementById('heading9')




// function pyramidOfDoom(element, text, color, time,  okCallback,failCallback) {
//   setTimeout(() => {
//     if (element) {
//       element.textContent = text
//       element.style.color = color
//       okCallback()
//     } else {
//       if (failCallback){
//         failCallback();
//       }
//     }
//   }, time)
// }
 //^ two callbacks are passed using arrow func 
 //& pyramidOfDoom(heading1, 'Changed by function', 'blue', 1000, ()=>{},()=>{})

// pyramidOfDoom(heading1, 'Changed by function', 'blue', 1000, ()=>{
//  pyramidOfDoom(heading2, 'Changed by function r', 'red', 1000, ()=>{
//   pyramidOfDoom(heading3, 'Changed by function ', 'brown', 1000, ()=>{
//     pyramidOfDoom(heading4, 'Changed by function ', 'green', 1000, ()=>{
//       pyramidOfDoom(heading5, 'Changed by function p', 'pink', 1000, ()=>{
//         pyramidOfDoom(heading6, 'Changed by function ', 'yellow', 1000, ()=>{
//          pyramidOfDoom(heading7, 'Changed by function gre', 'grey', 1000, ()=>{
//             pyramidOfDoom(heading8, 'Changed by function go', 'aqua', 1000, ()=>{
//               pyramidOfDoom(heading9, 'Changed by function get', 'blue', 1000, ()=>{

//                },()=>{ console.log("heading9 Does not exist please check");})  
//              },()=>{console.log("heading8 Does not exist please check");})
//            },()=>{console.log("heading7 Does not exist please check");})
//          },()=>{ console.log("heading6 Does not exist please check");})
//        },()=>{console.log("heading5 Does not exist please check");})
//      },()=>{console.log("heading4 Does not exist please check");})
//    },()=>{console.log("heading3 Does not exist please check");})
//  },()=>{console.log("heading2 Does not exist please check");})
// },()=>{console.log("heading1 Does not exist please check");})


// t0 avoid this we need to learn promises 

function solutionPromise(element,text,color,time){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            resolve();
        }else{
            reject("404 Not Found");
        }
       },time)
    })
}
solutionPromise(heading1,"one second","red",1000)
// .then(()=>{
//    return solutionPromise(heading2,"Two","red",1000)
// })
// .then(()=>{
//     return solutionPromise(heading3,"Three","red",1000)
//  })
//^also this way arrow function reduce our code
.then(()=>solutionPromise(heading2,"Two seconds","green",1000) )
.then(()=>solutionPromise(heading3,"Three seconds","yellow",1000) )
.then(()=>solutionPromise(heading4,"Four seconds","blue",1000) )
.then(()=>solutionPromise(heading5,"Five seconds","purple",1000) )
.then(()=>solutionPromise(heading6,"Six seconds","brown",1000) )
.then(()=>solutionPromise(heading7,"Seven seconds","pink",1000) )
.then(()=>solutionPromise(heading8,"Eight seconds","aqua",1000) )
.then(()=>solutionPromise(heading9,"Nine seconds","orange",1000) )
.catch((error)=>{alert(error)});