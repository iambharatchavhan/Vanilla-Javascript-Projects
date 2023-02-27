let img = document.getElementById('theImg')
let card = document.getElementById('card')
// console.log(img,card);
function allChar() {
  for (let i = 0; i < 53; i++) {
    // console.log(i);

    fetch(`https://thronesapi.com/api/v2/Characters/${i}`)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        // console.log(data)
        // console.log(data.id)
        //   console.log(data.title)
        //   console.log(data.imageUrl)

        card.innerHTML += `
      <div class="flex-container-cards">
  
  <div class="card">
    <div class="card-img-shadow"><img src="${data.imageUrl}" alt="img"></div>
    <div class="card-content">
      <h2>${data.fullName}</h2>
      <p>Family : <span>${data.family}</span></p>
      <p>Status : <span>${data.title}</span></p>
      <div class="button-shadow">
        <div class="card-button">Know More</div>
      </div>
    </div>
  </div>
  
</div>
      
      `
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}
allChar()
