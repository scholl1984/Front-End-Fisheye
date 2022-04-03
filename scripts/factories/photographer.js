function photographerFactory(data) {
    const { name, portrait, city, tagline, price } = data;
    

    const picture = `assets/photographers/Sample Photos-3/Photographers ID Photos/${portrait}`;
   

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const aClick = document.createElement( 'a' );
        aClick.setAttribute("href", "./photographer.html")
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("aria-label", name); 
        img.style.borderRadius= "50%"; 
        const h2 = document.createElement( 'a' );
        h2.textContent = name;
        h2.setAttribute("href", "./photographer.html")
        const h6 = document.createElement( 'h6' );
        h6.textContent = city;
        const tag = document.createElement( 'p' );
        tag.textContent = tagline;
        const prix = document.createElement( 'p' );
        prix.textContent = price;
        
        article.appendChild(aClick);
        aClick.appendChild(img)
        article.appendChild(h2);
        article.appendChild(h6);
        article.appendChild(tag);
        article.appendChild(prix);
       
        return (article);
       
    }
    
    console.log(data)
    return { name, picture, getUserCardDOM }
}

