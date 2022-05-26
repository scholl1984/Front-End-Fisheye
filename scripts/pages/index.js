async function displayData(data) {
    
    const photographersSection = document.querySelector(".photographer_section");

    data.photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
        
    });
}

async function init() {
    fetch('../data/photographers.json')
.then(response => {
    return response.json();
  }).then(jsondata => {
    displayData(jsondata)
    
  }).catch(err => {
    // Do something for an error here
  });
   
}

init();
