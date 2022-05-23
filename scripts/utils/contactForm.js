// DOM
const btn = document.getElementsByClassName("contact_button");
const contactBtn = document.getElementById("photograph-header-id");
const displayImages = document.getElementById("photograph-section-id");
const sortMenu = document.getElementById("sort__menu")


//launch modal
function modal() {
    btn.forEach((btn) => btn.addEventListener("click", displayModal));
}

//launch modal form
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    contactBtn.style.display = "none";
    displayImages.style.display = "none";
    document.querySelector(".infobar").style.display = "none";
    LogoPhotographerPage.style.display = "none";
    sortMenu.style.display = "none";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    contactBtn.style.display = "flex";
    displayImages.style.display = "grid";
    LogoPhotographerPage.style.display = "flex";
    sortMenu.style.display = "block";
    document.querySelector(".infobar").style.display = "flex";
}

//param modal
async function displayDataOuiOui(data) {
    const firstName = document.getElementById("First name").value;
    const lastName = document.getElementById("Last name").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("text").value;

    


    let button = document.querySelector(".contact_send");
    button.disabled = true;
    
    

    let params = (new URL(window.location)).searchParams;
    let id = params.get("id")
    let photographName = data.photographers.filter((photographer) => {
        return photographer.id.toString() === id
    });
    const {
        name
    } = photographName[0];
    const pModal = document.querySelector(".nameModal");
    pModal.innerHTML = name;

    console.log(firstName, lastName, email, text)
    
}

function infoInputFirstName () {
    console.log(document.getElementById("First name").value)
}

function infoInputLastName () {
    console.log(document.getElementById("Last name").value)
}

function infoInputEmail () {
    console.log(document.getElementById("email").value)
}

function infoInputText () {
    console.log(document.getElementById("text").value)
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

}

init();