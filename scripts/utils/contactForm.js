
// DOM
const modalBtn = document.getElementsByClassName("contact_button");
const contactBtn = document.getElementById("photograph-header-id");

//launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", displayModal()));

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
