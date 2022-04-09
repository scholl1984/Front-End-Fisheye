async function displayDataOui(data) {

const photographersSectionTwo = document.getElementById("photograph-header-id");
let params = (new URL(window.location)).searchParams;
let id = params.get("id")
   
let photographerMedia = data.media.filter((media)=>{return media.photographerId.toString() === id}); 
console.log({photographerMedia})
let photographerProfilInfo = data.photographers.filter((photographer)=>{return photographer.id.toString() === id});
console.log(photographerProfilInfo)
const { name, portrait, city, tagline, price } = photographerProfilInfo[0];

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
div3.appendChild(imgbis);

const [first, last] = name.split(' ');
console.log(first)

photographerMedia.map((media)=>{
  let footer = document.getElementById("photograph-footer-id")
  const pictureofthephotograph = document.createElement( 'img' );
  const videophotograph = document.createElement( 'video' );
  pictureofthephotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`)
  videophotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.video}`)
  videophotograph.setAttribute("type", "video/mp4")
 
  footer.append(pictureofthephotograph)
  footer.append(videophotograph)
})

};

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







