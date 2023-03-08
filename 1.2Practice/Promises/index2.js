const promiseArrayTwo = ['one', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']


function myPromise2(){
  return  new Promise((resolve, reject) => {
        if (
          promiseArrayTwo.includes('one') &&
          promiseArrayTwo.includes('Four') &&
          promiseArrayTwo.includes('Two')
        ) {
          resolve('yes accepted')
        } else {
          reject('You are rejected')
        }
      })
}
myPromise2()
    .then(()=>{console.log("resolve");})
    .catch(()=>{console.log("reject");})


    // .then() always return a promise

    function myPromiseThree(){
        return new Promise((resolve,reject)=>{
            resolve("yes resolve")
        })
    }
myPromiseThree().then((value)=>{
    console.log(value);
    value += "and changed";
    return value;//promise return from here
})
.then((value)=>{
    console.log(value);
})