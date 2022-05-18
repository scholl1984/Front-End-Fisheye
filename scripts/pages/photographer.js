// id page Photograph 
let params = (new URL(window.location)).searchParams;
let id = params.get("id");
let photographerMedia = [];
let defaultCase = 'Title';
let Name;
let Price;
let mediaId;

//show dropdown menu
function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.arrow-down') && !event.target.matches('.p_catégories')) {
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

// Sort Menu

function trieTitle(x, y) {
    if (x.title < y.title) return -1;
    if (x.title > y.title) return 1;
    return 0;
}

function trieDate(x, y) {
    if (x.date < y.date) return -1;
    if (x.date > y.date) return 1;
    return 0;
}

function trieLikes(x, y) {
    if (x.likes < y.likes) return -1;
    if (x.likes > y.likes) return 1;
    return 0
}

function filterMediasByTitle() {
    defaultCase = 'Title';
    sortPhotographerMedias(defaultCase);
}

function filterMediasByLikes() {
    defaultCase = 'Likes'
    sortPhotographerMedias(defaultCase);
}

function filterMediasByDate() {
    defaultCase = 'Date';
    sortPhotographerMedias(defaultCase);
}

function sortPhotographerMedias(defaultCase) {

    switch (defaultCase) {
        case 'Title':
            photographerMedia.sort(trieTitle);
            break;
        case 'Likes':
            photographerMedia.sort(trieLikes);
            break;
        case 'Date':
            photographerMedia.sort(trieDate);
            break;

    }
    renderPhotographerMedia()
}

// Media Photograph 

async function displayDataOui(data) {

    // Info Media
    photographerMedia = data.media.filter((media) => {
        return media.photographerId.toString() === id
    });


    const [{
        photographerId,
        title,
        likes
    }] = photographerMedia;


    // Info Photograph
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


    Price = price;
    Name = name;

    // Header Photograph

    const headerPhotograph = document.querySelector(".photograph-header")
    const picture = `assets/photographers/Sample Photos-3/Photographers ID Photos/${portrait}`;
    let DivHeaderPhotograph = `<div class="div1">
                                            <h1 class"Name_Photograph">${photographerProfilInfo[0].name}</h1>
                                            <p id="city_Photograph">${city}<p>
                                            <p id="tag_Photograph">${tagline}</p>
                                </div>
                          <div class="div2"><button class="contact_button" onclick="displayModal()" aria-label="contact me">Contactez-moi</button></div>
                          <div class="div3"><img src="${picture}" "alt", "portrait-of-the-photographer" aria-label="${name}" class="img_photographer"></div>`


    headerPhotograph.innerHTML = DivHeaderPhotograph;
    
    renderPhotographerMedia()

}

// InfoMenu 


function renderPhotographerMedia() {
    const section = document.getElementById("photograph-section-id");
    section.innerHTML = "";

    photographerMedia.map((media, index) => {

        const [first, last] = Name.split(' ');

        const linkPictureofthephotograph = document.createElement('a');
        const pictureofthephotograph = document.createElement('img');
        const titleofthephotograph = document.createElement('div');
        const titleofthephoto = document.createElement('div');
        const nbrLikes = document.createElement('button');
        mediaId = media.id
        
        if (media.image) {
            pictureofthephotograph.setAttribute("src", `assets/photographers/Sample Photos-3/${first}/${media.image}`);
            pictureofthephotograph.setAttribute("class", "photophotograph");
            pictureofthephotograph.setAttribute("onclick", `openCarousel(${photographerMedia.indexOf(media)})`);
            pictureofthephotograph.style.width= "320px"
            pictureofthephotograph.style.height= "300px"

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


        } else if (media.video) {

            const linkVideoofthephotograph = document.createElement('a');
            const videophotograph = document.createElement('video');
            const titleofthephotograph1 = document.createElement('div');
            const titleofthevideo = document.createElement('div');

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
            videophotograph.setAttribute("onclick", `openCarousel(${photographerMedia.indexOf(media)})`);
            videophotograph.style.width= "320px"
            videophotograph.style.height= "300px"

            section.append(linkVideoofthephotograph)
            linkVideoofthephotograph.append(videophotograph, titleofthephotograph1);

        }
        let sum = photographerMedia.reduce((acc, media) => {
            return acc += media.likes
        }, 0);

        let infoBar = `<div id="nbrTotal_Likes">${sum} &#9829</div><div class="price_Info">${Price}</div>`
        document.querySelector(".infobar").innerHTML = infoBar;

        document.getElementById(`like-${media.id})`).addEventListener("click", function() {
            media.likes++;
            document.getElementById(`like-${media.id})`).disabled = true
            sum = photographerMedia.reduce((acc, media) => {
                return acc += media.likes
            }, 0);

            document.getElementById("nbrTotal_Likes").innerHTML = sum + "" + "&#9829";
            document.getElementById(`like-${media.id})`).innerHTML = media.likes + "" + "&#9829;";
        })
    })

}

// Function init

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