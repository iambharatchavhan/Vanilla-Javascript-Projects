const heading1 = document.getElementById('heading1')
const heading2 = document.getElementById('heading2')
const heading3 = document.getElementById('heading3')
const heading4 = document.getElementById('heading4')
const heading5 = document.getElementById('heading5')
const heading6 = document.getElementById('heading6')

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
setTimeout(() => {
  heading1.textContent = 'one second'
  heading1.style.color = 'red'
  setTimeout(() => {
    heading2.textContent = 'Two second'
    heading2.style.color = 'green'
    setTimeout(() => {
      heading3.textContent = 'Three second'
      heading3.style.color = 'blue'
      setTimeout(() => {
        heading4.textContent = 'Four second'
        heading4.style.color = 'pink'
        setTimeout(() => {
          heading5.textContent = 'Five second'
          heading5.style.color = 'yellow'
          setTimeout(() => {
            heading6.textContent = 'Six second'
            heading6.style.color = 'purple'
          }, 5000)
        }, 2000)
      }, 3000)
    }, 1000)
  }, 2000)
}, 1000)
//! but as we see this code started to grow horizontally 
//! AsA very hard to manage and read also  called pyramid of doom