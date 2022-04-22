function photographerFactory(data) {
    const { name, portrait, city, tagline, price, id } = data;

    const picture = `assets/photographers/Sample Photos-3/Photographers ID Photos/${portrait}`;
    
   
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const aClick = document.createElement( 'a' );
        aClick.setAttribute("href", "./photographer.html?id=" + id)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("aria-label", name); 
        img.style.borderRadius= "50%"; 
        const h2 = document.createElement( 'a' );
        h2.textContent = name;
        h2.setAttribute("href", "./photographer.html?id=" + id)
        const h6 = document.createElement( 'h6' );
        h6.textContent = city;
        const tag = document.createElement( 'p' );
        tag.textContent = tagline;
        const prix = document.createElement( 'p' );
        prix.setAttribute("class", "price_photographer")
        prix.textContent = price;
 
        article.appendChild(aClick);
        aClick.appendChild(img)
        article.appendChild(h2);
        article.appendChild(h6);
        article.appendChild(tag);
        article.appendChild(prix);
        //console.log(id)
       
        return (article);
       
    }
   
    return { name, picture, getUserCardDOM, id}

}


 


// let params = (new URL("http://127.0.0.1:5500/index.html")).searchParams;
// params.append('place', 'Munich')




    // let params = (new URL("http://127.0.0.1:5500/assets/photographers/Sample%…os-3/Photographers%20ID%20Photos/TracyGalindo.jpg")).searchParams;
    // let surname = params.get('http'); 
    // let age = parseInt(params.get('age'));


    // console.log(surname)
