let img = document.getElementById('theImg')
let card = document.getElementById('card')
const next = document.querySelector('.btnNextbtn')
const btnSearch = document.querySelector('#btnSearch')
const inputV = document.querySelector('#searchInput')

// console.log(backBtn);

let a = 0
let b = 4

// console.log(next,prev);
// console.log(img,card);
function allChar(a, b) {
  //  card.innerHTML = "";

  fetch(`https://thronesapi.com/api/v2/Characters/`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      // console.log(data);
      for (x = a; x < b; x++) {
        // console.log(data[x]);
        card.innerHTML += `
          <div class="flex-container-cards">
      
      <div class="card">
        <div class="card-img-shadow"><img src="${data[x].imageUrl}" alt="img"></div>
        <div class="card-content">
          <h2>${data[x].fullName}</h2>
          <h2 class = "hideId" >${data[x].id}</h2>
          <div class="button-shadow">
            <div class="card-button">Know More</div>
          </div>
        </div>
      </div>
      
    </div>
     
          `
      }
      const cardButton = Array.from(document.querySelectorAll('.card-button'))
      // console.log(cardButton);

      cardButton.forEach((e, i) => {
        e.addEventListener('click', (e) => {
          const captureName = e.target.parentElement.parentElement.getElementsByTagName(
            'h2',
          )[1].innerText
          card.innerHTML = ''
          next.disabled = true
          next.style.visibility = 'hidden'


          fetch(`https://thronesapi.com/api/v2/Characters/${captureName}`)
            .then(function (response) {
              return response.json()
            })
            .then(function (data) {
              card.innerHTML = `
              <div class="btnBack">
            <button id="backBtn">Back</button>
                 </div>
            <div class="flex-container-cards">
            
        <div class="card">
          <div class="card-img-shadow"><img src="${data.imageUrl}" alt="img"></div>
          <div class="card-content">
            <h2>${data.fullName}</h2>
            <p>First Name : <span>${data.firstName}</span></p>
            <p>last  Name : <span>${data.lastName}</span></p>
            <p>Family : <span>${data.family}</span></p>
            <p>Status : <span>${data.title}</span></p>
            
          </div>
        </div>
        
      </div>
      </div>
      
            `
        

              const backBtn = document.getElementById('backBtn')
              backBtn.addEventListener('click', () => {
                card.innerHTML = ''
                allChar(a, b)
                next.disabled = false
                next.style.visibility = 'visible'
              })
            })
        })
      })
    })

    .catch(function (error) {
      console.error(error)
    })
}

allChar(a, b)

next.addEventListener('click', () => {
  a += 4
  b += 4
  if (b >= 52) {
    next.disabled = true
  } else {
    next.disabled = false
  }
  allChar(a, b)
})


btnSearch.addEventListener('click', () => {
  const query = inputV.value.toLowerCase()
  inputV.value = ''
  fetch(`https://thronesapi.com/api/v2/Characters/`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      if (query) {
        let nameArr = []
        for (let i = 0; i < data.length; i++) {
          nameArr.push(data[i].fullName.toLowerCase())
        }

        indexFullName = nameArr.indexOf(`${query}`)
        if (indexFullName === -1) {
          return
        }

        fetch(`https://thronesapi.com/api/v2/Characters/${indexFullName}`)
          .then(function (response) {
            return response.json()
          })
          .then(function (data) {
            next.style.visibility = 'hidden'
            card.innerHTML = `
              <div class="btnBack">
            <button id="backBtn">Back</button>
                 </div>
            <div class="flex-container-cards">
            
        <div class="card">
          <div class="card-img-shadow"><img src="${data.imageUrl}" alt="img"></div>
          <div class="card-content">
            <h2>${data.fullName}</h2>
            <p>First Name : <span>${data.firstName}</span></p>
            <p>last  Name : <span>${data.lastName}</span></p>
            <p>Family : <span>${data.family}</span></p>
            <p>Status : <span>${data.title}</span></p>
          </div>
        </div>
        
      </div>
      </div>
      
            `
            const backBtn = document.getElementById('backBtn')
            backBtn.addEventListener('click', () => {
              card.innerHTML = ''
              allChar(a, b)
              next.disabled = false
              next.style.visibility = 'visible'
            })
          })
      }
    })
})
