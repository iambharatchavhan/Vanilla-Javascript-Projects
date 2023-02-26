let img = document.getElementById('theImg')
let card = document.getElementById('card')
// console.log(img,card);
function allChar() {
    for(let i=0 ; i<59 ; i++){
        // console.log(i);
  
  fetch(`https://thronesapi.com/api/v2/Characters/${i}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
    //   console.log(data)
    //   console.log(data.fullName)
    //   console.log(data.title)
    //   console.log(data.imageUrl)

      card.innerHTML += `
      <div id="subCard">
      <div id="img">
        <img src="${data.imageUrl}" alt="" id="theImg">
      </div>
      <div id="info">
        <p class="name">Name  : <span class="fullName">${data.fullName}</span></p>
        <p class="name">Title: <span class="title">${data.title}</span></p>
        <p class="name">family: <span class="family">${data.family}</span></p>
      </div>
  </div>
      
      `
    })
    .catch(function (error) {
      console.error(error)
    })
}
}
allChar();