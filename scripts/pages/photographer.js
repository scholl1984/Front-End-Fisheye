async function displayDataOui(data) {

const photographersSectionTwo = document.getElementById("photograph-header-id");
let params = (new URL(window.location)).searchParams;
let id = params.get("id")
   
let photographerMedia = data.media.filter((media)=>{return media.photographerId.toString() === id}); 
console.log(photographerMedia)

const [{photographerId, title, likes}] = photographerMedia;
let sum = 0;
for (var i = 0; i < photographerMedia.length; i++)
sum += photographerMedia[i].likes;
console.log(sum)

let photographerProfilInfo = data.photographers.filter((photographer)=>{return photographer.id.toString() === id});
console.log(data.photographers)
const { name, portrait, city, tagline, price } = photographerProfilInfo[0];
console.log(name)

const infoBar = document.querySelector(".infobar")
let nbrLikes = document.createElement("div");
nbrLikes.setAttribute("class", "nbr_Likes")
nbrLikes.innerHTML = sum;
let priceInfo = document.createElement("div");
priceInfo.setAttribute("class", "price_Info")
priceInfo.innerHTML = price
infoBar.append(nbrLikes, priceInfo)


const picture = `assets/photographers/Sample Photos-3/Photographers ID Photos/${portrait}`;
const button = document.querySelector(".contact_button")
button.setAttribute("aria-label", "contact me"); 

var div1 = document.createElement("div");
div1.setAttribute("class", "div1")
var div2 = document.createElement("div");
div2.setAttribute("class", "div2")
var div3 = document.createElement("div");
div3.setAttribute("class", "div3")

photographersSectionTwo.append(div1, div2, div3)

const title1 = document.createElement("h2");
const textnode = document.createTextNode(photographerProfilInfo[0].name);
const pricePhotograph = document.createElement("h2")
div1.appendChild(title1);
title1.appendChild(textnode);
const h6 = document.createElement( 'h6' );
h6.textContent = city;
div1.appendChild(h6);
const tag1 = document.createElement( 'p' );
const texttag1 = document.createTextNode(tagline);
div1.appendChild(tag1);
tag1.appendChild(texttag1);
div2.appendChild(button)

const imgbis = document.createElement( 'img' );
imgbis.setAttribute("src", picture)
imgbis.setAttribute("aria-label", name);
imgbis.setAttribute("class", "img_photographer") 
div3.appendChild(imgbis);

const [first, last] = name.split(' ');
console.log(first)

// PhotographMédia

photographerMedia.map((media)=>{
  let footer = document.getElementById("photograph-footer-id")
  if(media.image) {
    const linkPictureofthephotograph = document.createElement( 'a' );
    const pictureofthephotograph = document.createElement( 'img' );
    const titleofthephotograph = document.createElement( 'div' );
    pictureofthephotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`); 
    footer.append(linkPictureofthephotograph)
    pictureofthephotograph.setAttribute("class", "photophotograph");
    pictureofthephotograph.setAttribute("onclick", "displayLighbox()");
    linkPictureofthephotograph.append(pictureofthephotograph, titleofthephotograph)
    titleofthephotograph.innerHTML = media.title +' ' + media.likes;
    titleofthephotograph.display = "flex"
    
  } else if(media.video){
    const linkVideoofthephotograph = document.createElement( 'a' );
    const videophotograph = document.createElement( 'video' );
    const titleofthephotograph1 = document.createElement( 'div' );
    videophotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.video}`);
    videophotograph.setAttribute("type", "video/mp4")
    videophotograph.setAttribute("class", "photophotograph");
    videophotograph.setAttribute("onclick", "displayLighbox()");
    footer.append(linkVideoofthephotograph)
    linkVideoofthephotograph.append(videophotograph, titleofthephotograph1)
    titleofthephotograph1.innerHTML = media.title +' ' + media.likes;
  }
})
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







