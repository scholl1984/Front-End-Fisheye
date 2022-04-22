async function displayDataOui(data) {

const photographersSectionTwo = document.getElementById("photograph-header-id");

let params = (new URL(window.location)).searchParams;
let id = params.get("id")
let photographerMedia = data.media.filter((media)=>{return media.photographerId.toString() === id}); 

const [{photographerId, title, likes}] = photographerMedia;



let photographerProfilInfo = data.photographers.filter((photographer)=>{return photographer.id.toString() === id});
const { name, portrait, city, tagline, price } = photographerProfilInfo[0];


// Header Photograph

const headerPhotograph = document.querySelector(".photograph-header")
const picture = `assets/photographers/Sample Photos-3/Photographers ID Photos/${portrait}`;

let DivHeaderPhotograph = `<div class="div1"><h2>${photographerProfilInfo[0].name}</h2>
                                            <h6>${city}</h6>
                                            <p>${tagline}</p>
                            </div>
                        <div class="div2"><button class="contact_button" onclick="displayModal()" aria-label="contact me">Contactez-moi</button></div>
                        <div class="div3"><img src="${picture}" aria-label="${name}" class="img_photographer"></div>`

headerPhotograph.innerHTML = DivHeaderPhotograph;

const [first, last] = name.split(' ');


photographerMedia.map((media)=>{
  let youpi = media.likes;

  if(media.image) {
    
  //   function youpi () {
  //   media.likes.sort();
  
  // }
  // sort () 
    const section = document.getElementById("photograph-section-id");
    // const mediaImage = `assets/photographers/Sample Photos-3/${first}/${media.image}`
    // let mediaPhotographer = `<a><img src="assets/photographers/Sample Photos-3/${first}/${media.image}" class="photophotograph" onclick="displayLighbox()"><div class="title_photo"><div class="title" style="font-size: 13px;">${media.title}</div><div class="nbr_likes">${media.likes} + "&#9829;"</div></div></a>`
    // console.log(mediaImage)
    // console.log(mediaPhotographer)
    // footer.innerHTML = mediaPhotographer;

    const linkPictureofthephotograph = document.createElement( 'a' );
    const pictureofthephotograph = document.createElement( 'img' );
    const titleofthephotograph = document.createElement( 'div' );
    titleofthephotograph.setAttribute("class", "title_photo");
    const titleofthephoto = document.createElement( 'div' );
    titleofthephoto.setAttribute("class", "title");
    const nbrLikes = document.createElement( 'button' );
    nbrLikes.setAttribute("class", "nbr_likes");
    titleofthephotograph.append(titleofthephoto, nbrLikes)
    titleofthephoto.innerHTML = media.title;
    titleofthephoto.style.fontSize = '13px'


nbrLikes.addEventListener("click", buttonClick)

let sum = 0;
for (let i = 0; i < photographerMedia.length; i++)
sum += photographerMedia[i].likes;
let imgLikes = media.likes;

    function buttonClick() {
      imgLikes++;
      sum++
        nbrLikes.innerHTML = imgLikes + " " + "&#9829;";

// InfoBar 

let infoBar =  `<div class="nbrTotal_Likes">${sum}</div>
                  <div class="price_Info">${price}</div>`
                  
document.querySelector(".infobar").innerHTML = infoBar;
    }

    buttonClick()

    pictureofthephotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`); 
    section.append(linkPictureofthephotograph)
    pictureofthephotograph.setAttribute("class", "photophotograph");
    pictureofthephotograph.setAttribute("onclick", `displayLighbox(${media.id})`);
    linkPictureofthephotograph.append(pictureofthephotograph, titleofthephotograph);
    
  } else if(media.video){
    const section = document.getElementById("photograph-section-id");

    const linkVideoofthephotograph = document.createElement( 'a' );
    const videophotograph = document.createElement( 'video' );
    const titleofthephotograph1 = document.createElement( 'div' );

    titleofthephotograph1.setAttribute("class", "title_video");
    const titleofthevideo = document.createElement( 'div' );
    titleofthevideo.setAttribute("class", "title");
    const nbrLikes = document.createElement( 'button' );
    nbrLikes.setAttribute("class", "nbr_likes");
    titleofthephotograph1.append(titleofthevideo, nbrLikes)
    titleofthevideo.innerHTML = media.title;

    nbrLikes.addEventListener("click", buttonClick)

    let sum = 0;
    for (let i = 0; i < photographerMedia.length; i++)
    sum += photographerMedia[i].likes;
    let imgLikes = media.likes;
    
        function buttonClick() {
          imgLikes++;
          sum++
            nbrLikes.innerHTML = imgLikes + " " + "&#9829;";
   
    
    let infoBar =  `<div class="nbrTotal_Likes">${sum}</div>
                      <div class="price_Info">${price}</div>`
                      
    document.querySelector(".infobar").innerHTML = infoBar;
        }

    nbrLikes.innerHTML = media.likes + "" + "&#9829;";
    videophotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.video}`);
    videophotograph.setAttribute("type", "video/mp4")
    videophotograph.setAttribute("class", "photophotograph");
    videophotograph.setAttribute("onclick", "displayLighbox()");
    section.append(linkVideoofthephotograph)
    linkVideoofthephotograph.append(videophotograph, titleofthephotograph1);
  
  }

})
}

// Barre trier 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

async function init() {
    fetch('../data/photographers.json')
.then(response => {
    return response.json();
  }).then(jsondata => {
    displayDataOui(jsondata)
    
  }).catch(err => {
    // Do something for an error here
  });
};

init();







