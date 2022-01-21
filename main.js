const auth = '563492ad6f91700001000001ba0abe4312b747eab961ba16e52ba2ad';
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const submitButton = document.querySelector('.submit-btn');
let searchValue;

searchInput.addEventListener('input', updateInput);


function updateInput(event){
    console.log( );
}

async function curatedPhotos(){
    const dataFetch = await fetch("https://api.pexels.com/v1/curated?per_page=15", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    data.photos.forEach((photo) => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `<img src=${photo.src.large}></img>
        <p>${photo.photographer}</p>
        `;
        gallery.appendChild(galleryImg);
    });
}

async function searchPhotos(query){
    // "https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1"
    const dataFetch = await fetch(`https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    data.photos.forEach((photo) => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `<img src=${photo.src.large}></img>
        <p>${photo.photographer}</p>
        `;
        gallery.appendChild(galleryImg);
    });
}

curatedPhotos();