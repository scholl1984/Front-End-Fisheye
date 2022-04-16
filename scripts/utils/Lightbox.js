

const Lightbox = document.getElementById("myLightbox");
const LinkOnPhoto = document.getElementsByClassName("photophotograph")



function displayLighbox() {
Lightbox.style.display = "block";
contactBtn.style.display = "none";
displayImages.style.display = "none";
divSort.style.display = "none";
}

function closeLighbox() {
Lightbox.style.display = "none";
contactBtn.style.display = "flex";
displayImages.style.display = "grid";
    }

async function displayDataLightbox(data) {
    console.log(data)
    const lightboxContent = document.getElementById("lightBox-content")
    console.log(lightboxContent)
    let params = (new URL(window.location)).searchParams;
    let id = params.get("id")
    console.log(id)

let photographerMedia = data.media.filter((media)=>{return media.photographerId.toString() === id}); 
console.log(photographerMedia)
const [{photographerId, title, likes}] = photographerMedia;

let photographerProfilInfo = data.photographers.filter((photographer)=>{return photographer.id.toString() === id});
console.log(data.photographers)
const { name, portrait, city, tagline, price } = photographerProfilInfo[0];
console.log(portrait)
const [first, last] = name.split(' ');

photographerMedia.map((media)=>{
    let lighBoxContent = document.getElementById("lightBox-content")
    if(media.image) {
    
    const photoLightBox =document.createElement( 'img' );
    photoLightBox.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`); 
    photoLightBox.style.width = "300px";
    photoLightBox.style.height = "300px";
    photoLightBox.setAttribute("class", "img_lightbox")
    
   

    lighBoxContent.append(photoLightBox)   
      
    } else if(media.video){
    const videoLightBox =document.createElement( 'img' );
    
    }
  })
  }   
    
    
    async function init() {
        fetch('../data/photographers.json')
    .then(response => {
        return response.json();
      }).then(jsondata => {
        displayDataLightbox(jsondata)
        
      }).catch(err => {
        // Do something for an error here
      });
       
    };
    
    init();