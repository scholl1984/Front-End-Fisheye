function photographerFactory(data) {
    const { name, portrait, city, tagline, price, id } = data;

    const picture = `assets/photographers/Sample Photos-3/Photographers ID Photos/${portrait}`;
    
   
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const aClick = document.createElement( 'a' );
        aClick.setAttribute("href", "./photographer.html?id=" + id)
        aClick.setAttribute("aria-describedby", "link-photographerPage")
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "portrait-of-the-photographer"); 
        img.setAttribute("aria-label", name); 
        img.style.borderRadius= "50%"; 
        const h2 = document.createElement( 'a' );
        h2.textContent = name;
        h2.setAttribute("href", "./photographer.html?id=" + id)
        h2.setAttribute("aria-describedby", "link-photographerPage")
        const cityPhotographer = document.createElement( 'p' );
        cityPhotographer.setAttribute("class", "p-cityPhotographer")
        cityPhotographer.textContent = city;
        const tag = document.createElement( 'p' );
        tag.setAttribute("class", "p-logLine")
        tag.textContent = tagline;
        const prix = document.createElement( 'p' );
        prix.setAttribute("class", "price_photographer")
        prix.textContent = price;
 
        article.appendChild(aClick);
        aClick.appendChild(img)
        article.appendChild(h2);
        article.appendChild(cityPhotographer);
        article.appendChild(tag);
        article.appendChild(prix);
       
        return (article);
       
    }
   
    return { name, picture, getUserCardDOM, id}

}
