let img = document.getElementById('theImg');
let card = document.getElementById('card');
const next = document.querySelector('.btnNextbtn');
const btnSearch = document.querySelector('#btnSearch');
const inputV = document.querySelector("#searchInput");

let a = 0;
let b = 4;

// console.log(next,prev);
// console.log(img,card);
function allChar(a, b) {
  //  card.innerHTML = "";

  fetch(`https://thronesapi.com/api/v2/Characters/`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      for (x = a; x < b; x++) {
        // console.log(data[x])
        card.innerHTML += `
          <div class="flex-container-cards">
      
      <div class="card">
        <div class="card-img-shadow"><img src="${data[x].imageUrl}" alt="img"></div>
        <div class="card-content">
          <h2>${data[x].fullName}</h2>
          <p>Family : <span>${data[x].family}</span></p>
          <p>Status : <span>${data[x].title}</span></p>
          <div class="button-shadow">
            <div class="card-button">Know More</div>
          </div>
        </div>
      </div>
      
    </div>
          
          `
         

      }

      btnSearch.addEventListener('click', ()=>{
        theText = inputV.value;

      inputV.value =""
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





// prev.addEventListener('click', ()=> {
//   a -= 6;
//   b -= 6;
//   if (a<= 0) {
//      prev.disabled = true;
//   }else{
//    prev.disabled = false;

//   }

//   allChar(a ,b);
// })
