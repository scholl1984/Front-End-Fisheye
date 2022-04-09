
// DOM
const modalBtn = document.getElementsByClassName("contact_button");
const btn = document.getElementsByClassName("contact_button");
const contactBtn = document.getElementById("photograph-header-id");

//launch modal
function modal () {
btn.forEach((btn) => btn.addEventListener("click", displayModal()));
}
//launch modal form
function displayModal() {
    const modal = document.getElementById("contact_modal");
	  modal.style.display = "block";
    contactBtn.style.display = "none";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    contactBtn.style.display = "flex";
}





async function displayDataOuiOui(data) {
  
    let params = (new URL(window.location)).searchParams;
    let id = params.get("id")
    let photographName = data.photographers.filter((photographer)=>{return photographer.id.toString() === id});
    const { name } = photographName[0];
    const headerModal = document.querySelector(".header_modal");
    const pModal = document.querySelector(".nameModal");
    pModal.innerHTML = name;
    
}

async function init() {
    fetch('../data/photographers.json')
.then(response => {
    return response.json();
  }).then(jsondata => {
    displayDataOuiOui(jsondata)
    
  }).catch(err => {
    // Do something for an error here
  });
   
};

init();
    

// async function displayDataOuiOui(data) {
//     const { name } = data;
    
    
    
   

// }

// async function init() {
//     fetch('../data/photographers.json')
// .then(response => {
//     return response.json();
//   }).then(jsondata => {
//     displayDataOui(jsondata)
    
//   }).catch(err => {
//     // Do something for an error here
//   });
   
// };

// init();