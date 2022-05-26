// DOM
const Carousel = document.querySelector(".carousel")
const LinkOnPhoto = document.querySelector("#photograph-section-id")
const LogoPhotographerPage = document.getElementById("logo1")
const infoBar = document.querySelector(".infobar")
const PhotographHeader = document.getElementById("photograph-header-id");
const TrierMenu = document.getElementById("sort__menu")
let slideIndex;

// Open the carousel

function openCarousel(index, photographerMedia) {
    Carousel.style.display = "block";
    LinkOnPhoto.style.display = "none";
    LogoPhotographerPage.style.display = "none";
    infoBar.style.display = "none";
    PhotographHeader.style.display = "none";
    TrierMenu.style.display = "none";
    showSlides(index, photographerMedia)
    
}

// Close the carousel
function closeCarousel() {
    Carousel.style.display = "none";
    LinkOnPhoto.style.display = "grid";
    LogoPhotographerPage.style.display = "block";
    infoBar.style.display = "flex";
    PhotographHeader.style.display = "flex";
    TrierMenu.style.display = "flex";
    document.querySelectorAll(".mySlides").forEach(element =>{
        element.style.display = "none";

    })
}

async function displayDataLightbox(data) {

    let params = (new URL(window.location)).searchParams;
    let id = params.get("id")

    let photographerMedia = data.media.filter((media) => {
        return media.photographerId.toString() === id
    });
    

    let photographerProfilInfo = data.photographers.filter((photographer) => {
        return photographer.id.toString() === id
    });
    const {
        name,
    } = photographerProfilInfo[0];

    renderLightbox (name, photographerMedia) 
}

function renderLightbox (name, photographerMedia) {

let lighBoxContent = document.querySelector(".slideshow-container")
lighBoxContent.innerHTML = "";
const [first] = name.split(' ');

console.log(photographerMedia)

    photographerMedia.map((media) => {
      
        if (media.image) {
            const photoLightBox = document.createElement("img");
            const divSlide = document.createElement('div')  
            const titleSlide = document.createElement('p') 
            titleSlide.setAttribute("class", "title_lightbox")
            titleSlide.innerHTML = media.title ;   
            divSlide.setAttribute("class", "mySlides")
            photoLightBox.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`);
            photoLightBox.setAttribute("class", "photophotograph");
            photoLightBox.setAttribute("alt", "photo of the photographer");
            photoLightBox.setAttribute("aria-label",`${media.title}`);
            divSlide.append(titleSlide)
            divSlide.append(photoLightBox)
            lighBoxContent.append(divSlide)

        } else if (media.video) {
            const videoLightBox = document.createElement("video");
            const divSlide = document.createElement('div')
            const titleSlideVideo = document.createElement('p') 
            divSlide.setAttribute("class", "mySlides")
            titleSlideVideo.setAttribute("class", "title_lightbox")
            titleSlideVideo.innerHTML = media.title ; 
            videoLightBox.autoplay = true;
            videoLightBox.loop = true

            divSlide.append(titleSlideVideo)
            videoLightBox.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.video}`);
            videoLightBox.setAttribute("type", "video/mp4")
            videoLightBox.setAttribute("alt", "photo of the photographer");
            videoLightBox.setAttribute("aria-label",`${media.title}`);
            
            divSlide.append(videoLightBox)
            lighBoxContent.append(divSlide)
        }
        
    });

}

//CARROUSSEL
document.getElementById('next-button').addEventListener("click", function() {
    let slideshowPage = document.querySelector(".carousel");
    let slides = slideshowPage.querySelectorAll(".mySlides");
    if(slideIndex  === slides.length - 1) slideIndex = 0
    else slideIndex = slideIndex  + 1;
    showSlides(slideIndex);
 });
 document.getElementById('prev-button').addEventListener("click", function() {
    let slideshowPage = document.querySelector(".carousel");
    let slides = slideshowPage.querySelectorAll(".mySlides");
    if (slideIndex  === 0) slideIndex = slides.length - 1
    else slideIndex = slideIndex - 1;
    showSlides(slideIndex);
 });

function showSlides(n) {
      let i;
      slideIndex = n
      if (document.querySelector(".carousel")) {
          let slideshowPage = document.querySelector(".carousel");
          if (slideshowPage.classList.contains("carousel")) {
              let slides = slideshowPage.querySelectorAll(".mySlides");
             for (i = 0; i < slides.length; i++) {
                //   console.log({slideIndex})
                  if(i === slideIndex){
                    slides[i].style.display = "block";
                  }else {
                    slides[i].style.display = "none";
                  }
              }
          } 
        }
      }   

async function init() {

    fetch('../data/photographers.json')
        .then(response => {
            return response.json();
        }).then(jsondata => {
            displayDataLightbox(jsondata)
            //showSlides(jsondata.length)
        }).catch(err => {
            // Do something for an error here
        });

}

init();