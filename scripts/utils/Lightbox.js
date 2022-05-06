// DOM
const Carousel = document.querySelector(".carousel")
const LinkOnPhoto = document.querySelector("#photograph-section-id")
const LogoPhotographerPage = document.getElementById("logo1")
const infoBar = document.querySelector(".infobar")
const closeCursor = document.querySelector(".close_cursor")
const PhotographHeader = document.getElementById("photograph-header-id");
const TrierMenu = document.getElementById("sort__menu")


// Open the carousel

function openCarousel(index) {
    Carousel.style.display = "block";
    LinkOnPhoto.style.display = "none";
    LogoPhotographerPage.style.display = "none";
    infoBar.style.display = "none";
    PhotographHeader.style.display = "none";
    TrierMenu.style.display = "none";
    showSlides(index+1)
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
    const lightboxContent = document.getElementById("lightBox-content")
    let params = (new URL(window.location)).searchParams;
    let id = params.get("id")

    let photographerMedia = data.media.filter((media) => {
        return media.photographerId.toString() === id
    });
    const [{
        photographerId,
        title,
        likes
    }] = photographerMedia;

    let photographerProfilInfo = data.photographers.filter((photographer) => {
        return photographer.id.toString() === id
    });
    const {
        name,
        portrait,
        city,
        tagline,
        price
    } = photographerProfilInfo[0];
    const [first, last] = name.split(' ');


    photographerMedia.map((media) => {

        let lighBoxContent = document.querySelector(".slideshow-container")
      
        if (media.image) {
            const photoLightBox = document.createElement("img");
            const divSlide = document.createElement('div')          
            divSlide.setAttribute("class", "mySlides")
            photoLightBox.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`);
            photoLightBox.style.width = "300px";
            photoLightBox.style.height = "300px";
            divSlide.append(photoLightBox)
            lighBoxContent.append(divSlide)
            


        } else if (media.video) {
            const videoLightBox = document.createElement("video");
            const divSlide = document.createElement('div')
            divSlide.setAttribute("class", "mySlides")
            videoLightBox.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.video}`);
            videoLightBox.setAttribute("type", "video/mp4")
            videoLightBox.style.width = "300px";
            videoLightBox.style.width = "300px";
            divSlide.append(videoLightBox)
            lighBoxContent.append(divSlide)
        }
console.log("coucou")
    });


   
}

 // Lightbox //

let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log(slideIndex)
    let i;
    if (document.querySelector(".carousel")) {
      
        let slideshowPage = document.querySelector(".carousel");
        if (slideshowPage.classList.contains("carousel")) {
            let slides = slideshowPage.querySelectorAll(".mySlides");
            console.log(slides)
            if (n > slides.length) {
                slideIndex = 1
            };
            if (n < 1) {
                slideIndex = slides.length
            };
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            };
            console.log(slideIndex - 1, slides)
            slides[slideIndex - 1].style.display = "block";
        }
    }
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