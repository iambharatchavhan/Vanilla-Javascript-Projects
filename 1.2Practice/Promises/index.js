// lets create new promise

const promiseArray = ['one', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']

// new Promise ((resolve,reject)=>{
//     if(promiseArray.includes("one") &&promiseArray.includes ("Four") && promiseArray.includes("Two") ){
//         resolve("yes accepted");
//     }else{
//         reject("You are rejected");
//     }
// })

// we created a promise  and now we are going to consume it

// storing in the variable
const myPromise = new Promise((resolve, reject) => {
  if (
    promiseArray.includes('one') &&
    promiseArray.includes('Four') &&
    promiseArray.includes('Two')
  ) {
    resolve('yes accepted')
  } else {
    reject('You are rejected')
  }
})

//^ then takes two callBack function in args resolve=xyz and reject=error
// myPromise.then((xyz) => {
//   console.log('hehhehe ', xyz)
// }),
//   (error) => {
//     console.log(error)
//   }
//^ also you can pass only resolve

// myPromise.then((resolve) => {
//     console.log('hehhehe ', resolve)
//   })

//*   also do chaining  using catch errore 

myPromise.then((resolve) => {
    console.log('hehhehe ', resolve)
  }).catch((reject)=>{console.log("reject");})