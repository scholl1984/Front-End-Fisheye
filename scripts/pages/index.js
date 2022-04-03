



async function displayData(data) {
    const photographersSection = document.querySelector(".photographer_section");
console.log(data.photographers)
    data.photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    fetch('../data/photographers.json')
.then(response => {
    return response.json();
  }).then(jsondata => {
    displayData(jsondata)
  }).catch(err => {
    // Do something for an error here
  });
   
};

init();


    
//   async function getPhotographers() {

//     const photographers = [
//         {
//             "name": "Ma data test",
//             "id": 1,
//             "city": "Paris",
//             "country": "France",
//             "tagline": "Ceci est ma data test",
//             "price": 400,
//             "portrait": "account.png"
//         },
//         {
//             "name": "Autre data test",
//             "id": 2,
//             "city": "Londres",
//             "country": "UK",
//             "tagline": "Ceci est ma data test 2",
//             "price": 500,
//             "portrait": "account.png"
//         },
//     ]
//     // et bien retourner le tableau photographers seulement une fois
//     return ({
//         photographers: [...photographers, ...photographers, ...photographers]})






        
//         // Penser à remplacer par les données récupérées dans le json
//         fetch("../../data/photographers.json")
//         .then(response => {
//            return response.json();
//         })
//         .then(jsondata => {
//             
//             console.log(photographers)
//             return photographers;
//         });

        

    //const photographers = [
    //     {
    //         "name": "Ma data test",
    //         "id": 1,
    //         "city": "Paris",
    //         "country": "France",
    //         "tagline": "Ceci est ma data test",
    //         "price": 400,
    //         "portrait": "account.png"
    //     },
    //     {
    //         "name": "Autre data test",
    //         "id": 2,
    //         "city": "Londres",
    //         "country": "UK",
    //         "tagline": "Ceci est ma data test 2",
    //         "price": 500,
    //         "portrait": "account.png"
    //     },
    // ]
    // et bien retourner le tableau photographers seulement une fois
    
//}
// const {photographers} = photographersList;
// console.log(photographers)

// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".photographer_section");

//     photographers.forEach((photographer) => {
//         const photographerModel = photographerFactory(photographer);
//         const userCardDOM = photographerModel.getUserCardDOM();
//         photographersSection.appendChild(userCardDOM);
//     });
// };

// async function init() {
//     // Récupère les datas des photographes
//     const { photographers } = await photographersList;
//     displayData(photographers);
// };

// init();



// if (window.fetch) {
//     // exécuter ma requête fetch ici
// } else {
//     // Faire quelque chose avec XMLHttpRequest?
// }
 
 
 
 
//  var photographers = require ("../../data/photographers.json");
//  console.log(photographers)  
   
//    async function getPhotographers() {
//        let photographers = [];
//         // Penser à remplacer par les données récupérées dans le json
//         fetch("../../data/photographers.json")
//         .then(response => {
//            return response.json();
//         })
//         .then(jsondata => {
//             photographers = jsondata.photographers;
//             console.log(photographers)
//             return photographers;
//         });
       
       
//   console.log(photographers)  

// let maRequete = new Request('../../data/photographers.json');

// fetch(maRequete)
// .then(response => {
//   return response.json();
// })

       
//         .then(jsondata => {
//             photographers = jsondata.photographers;
//             console.log(photographers)
//             return photographers;
//         });
    

//   async function getPhotographers() {
//     // Penser à remplacer par les données récupérées dans le json
//     const photographers = [
//         {
//             "name": "Ma data test",
//             "id": 1,
//             "city": "Paris",
//             "country": "France",
//             "tagline": "Ceci est ma data test",
//             "price": 400,
//             "portrait": "account.png"
//         },
//         {
//             "name": "Autre data test",
//             "id": 2,
//             "city": "Londres",
//             "country": "UK",
//             "tagline": "Ceci est ma data test 2",
//             "price": 500,
//             "portrait": "account.png"
//         },
//     ]
//     // et bien retourner le tableau photographers seulement une fois
//     return ({
//         photographers: [...photographers, ...photographers, ...photographers]})

        
// //     //     // et bien retourner le tableau photographers seulement une fois
// //          return ({photographers})
            

             
//     //}

//     async function displayData(photographers) {
//         const photographersSection = document.querySelector(".photographer_section");

//         photographers.forEach((photographer) => {
//             const photographerModel = photographerFactory(photographer);
//             const userCardDOM = photographerModel.getUserCardDOM();
//             photographersSection.appendChild(userCardDOM);
//         });
//     };

//     async function init() {
//         // Récupère les datas des photographes
//         const { photographers } = await getPhotographers();

//         console.log(photographers)
//         displayData(photographers);

//     };
    
//     init();
