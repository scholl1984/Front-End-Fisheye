
// DOM
const modalBtn = document.getElementsByClassName("contact_button");
const btn = document.getElementsByClassName("contact_button");
const contactBtn = document.getElementById("photograph-header-id");
const displayImages = document.getElementById("photograph-footer-id");
const divSort = document.getElementById("divSort");

//launch modal
function modal () {
btn.forEach((btn) => btn.addEventListener("click", displayModal()));
}

//launch modal form
function displayModal() {
    const modal = document.getElementById("contact_modal");
	  modal.style.display = "block";
    contactBtn.style.display = "none";
    displayImages.style.display = "none";
    divSort.style.display = "none";
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    contactBtn.style.display = "flex";
    displayImages.style.display = "grid";
}

async function displayDataOuiOui(data) {
    const firstName = document.getElementById("First name").value;
    const lastName = document.getElementById("Last name").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("text").value;
    
    let button = document.querySelector(".contact_send");
    button.disabled = true;
    
    let params = (new URL(window.location)).searchParams;
    let id = params.get("id")
    let photographName = data.photographers.filter((photographer)=>{return photographer.id.toString() === id});
    const { name } = photographName[0];
    const headerModal = document.querySelector(".header_modal");
    const pModal = document.querySelector(".nameModal");
    pModal.innerHTML = name;

   console.log(firstName,lastName,email,text)
    
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