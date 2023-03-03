//^ settimeout

function add (){
    console.log("triggered");
}
//Normal function 
setTimeout(add, 3000 );



addedText = () => console.log("addedText");
//Arrow function
const addedTime = setTimeout(addedText, 2000 );
// addedTime contains the id of the timeout function 


// but this is not always look like 
console.log("hey aim the first");

setTimeout(function(){
    console.log("Hello World iam two sec late");
},0); //!prints last cos stuck in EL waiting for emptying call stack que

for (let i = 0; i < 1000; i++) {
     console.log(" i am the last");
    
}


clearTimeout(addedTime);