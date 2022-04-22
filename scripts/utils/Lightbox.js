

// DOM
const Lightbox = document.getElementById("myLightbox");
const LinkOnPhoto = document.getElementsByClassName("photophotograph")
const LogoPhotographerPage = document.getElementById("logo1")
const infoBar = document.querySelector(".infobar")
const closeCursor = document.querySelector(".close_cursor")

let slideIndex = 0;
function showSlides(data, n, id) {
  console.log({n, id});
  let i;
  let slides = document.getElementsByClassName("mySlides_fade")
  console.log(slides.item(n))
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  //const index = slideIndex >= 1 ? slideIndex - 1 : 0
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
};

function plusSlides(id) {
  showSlides(slideIndex += 1, id);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

async function displayDataLightbox(data) {
    const lightboxContent = document.getElementById("lightBox-content")
    let params = (new URL(window.location)).searchParams;
    let id = params.get("id")

let photographerMedia = data.media.filter((media)=>{return media.photographerId.toString() === id}); 
const [{photographerId, title, likes}] = photographerMedia;

let photographerProfilInfo = data.photographers.filter((photographer)=>{return photographer.id.toString() === id});
const { name, portrait, city, tagline, price } = photographerProfilInfo[0];
const [first, last] = name.split(' ');

photographerMedia.map((media)=>{
    let lighBoxContent = document.getElementById("slideshow-container")

    if(media.image) {
    const photoLightBox = document.createElement( 'img' );
    const divSlide = document.createElement('div')
    divSlide.setAttribute("class", "mySlides_fade")
    photoLightBox.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`); 
    photoLightBox.style.width = "300px";
    photoLightBox.style.height = "300px";
    photoLightBox.setAttribute("id", photographerMedia.indexOf(media))
    divSlide.append(photoLightBox) 
    //lighBoxContent.append(divSlide)  
    //const next = document.getElementById('next');
    //next.setAttribute("onclick", plusSlides(photographerMedia.indexOf(media)))
    } else if(media.video){
    const videoLightBox =document.createElement( 'img' );
    }
      //slides[slideIndex-1].style.display = "block";
  });

// Lightbox //
}

    async function init() {
        fetch('../data/photographers.json')
    .then(response => {
        return response.json();
      }).then(jsondata => {
        displayDataLightbox(jsondata)
        showSlides(jsondata)
      }).catch(err => {
        // Do something for an error here
      });
       
    };
    
    init();