//callback function => function calling function

function greetOne ( callback){
    console.log("This is function one");
    callback();
}    

function greetTwo (){
    console.log("This is function two passed as callback");
}
// greetOne(greetTwo);

 greetOne(()=>{
console.log("this is arrow and annms function passed as callback");

});

//basic of callbacks