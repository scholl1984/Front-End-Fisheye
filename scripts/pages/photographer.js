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

// Media Photograph

photographerMedia.map((media)=>{

  const section = document.getElementById("photograph-section-id");
  const linkPictureofthephotograph = document.createElement( 'a' );
  const pictureofthephotograph = document.createElement( 'img' );
  const titleofthephotograph = document.createElement( 'div' );
  const titleofthephoto = document.createElement( 'div' );
  const  nbrLikes = document.createElement( 'button' );

    if(media.image) { 

    // const mediaImage = `assets/photographers/Sample Photos-3/${first}/${media.image}`
    // let mediaPhotographer = `<a><img src="assets/photographers/Sample Photos-3/${first}/${media.image}" class="photophotograph" onclick="displayLighbox()"><div class="title_photo"><div class="title" style="font-size: 13px;">${media.title}</div><div class="nbr_likes">${media.likes} + "&#9829;"</div></div></a>`
    
    // console.log(mediaPhotographer)
    // footer.innerHTML = mediaPhotographer;

    pictureofthephotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`); 
    pictureofthephotograph.setAttribute("class", "photophotograph");
    pictureofthephotograph.setAttribute("onclick", `displayLighbox(${media.id})`);

    titleofthephotograph.setAttribute("class", "title_photo");
    titleofthephoto.setAttribute("class", "title");

    nbrLikes.setAttribute("class", "nbr_likes");
    nbrLikes.setAttribute("id", `like-${media.id})`);
    nbrLikes.innerHTML = media.likes + "" + "&#9829;";

    titleofthephotograph.append(titleofthephoto, nbrLikes)
    titleofthephoto.innerHTML = media.title;
    titleofthephoto.style.fontSize = '13px'
    
    linkPictureofthephotograph.append(pictureofthephotograph, titleofthephotograph);
    section.append(linkPictureofthephotograph)
  
    
  } else if(media.video){

    const linkVideoofthephotograph = document.createElement( 'a' );
    const videophotograph = document.createElement( 'video' );
    const titleofthephotograph1 = document.createElement( 'div' );
    const titleofthevideo = document.createElement( 'div' );

    titleofthephotograph1.setAttribute("class", "title_video");
    titleofthevideo.setAttribute("class", "title");
    
    nbrLikes.setAttribute("class", "nbr_likes");
    nbrLikes.setAttribute("id", `like-${media.id})`);
    nbrLikes.innerHTML = media.likes + "" + "&#9829;";
    
    titleofthephotograph1.append(titleofthevideo, nbrLikes)
    titleofthevideo.innerHTML = media.title;
    
    videophotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.video}`);
    videophotograph.setAttribute("type", "video/mp4")
    videophotograph.setAttribute("class", "photophotograph");
    videophotograph.setAttribute("onclick", "displayLighbox()");
    
    section.append(linkVideoofthephotograph)
    linkVideoofthephotograph.append(videophotograph, titleofthephotograph1);
  }

  let sum = photographerMedia.reduce((acc, media) => {
    return acc += media.likes
  }, 0);
  let infoBar =  `<div id="nbrTotal_Likes">${sum}</div>
  <div class="price_Info">${price}</div>`

  document.querySelector(".infobar").innerHTML = infoBar;
  document.getElementById(`like-${media.id})`).addEventListener("click", function (){
    media.likes++;
    sum = photographerMedia.reduce((acc, media) => {
      return acc += media.likes
    }, 0);

    document.getElementById("nbrTotal_Likes").textContent = sum;
    document.getElementById(`like-${media.id})`).innerHTML = media.likes + "" + "&#9829;";
    
  })

})
}

// Media Photograph

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

// Function 

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







