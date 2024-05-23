const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const songText = document.getElementById('song');
const albumText = document.getElementById('album');
const twittetbtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const imageList = document.getElementById('idImageList');



const apiUrl = 'https://taylorswiftapi.onrender.com/get';
let apiQuotes = [];


async function fetchData() {
        loading();

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        newQuote();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function newQuote(){
    loading();

    quoteText.textContent = apiQuotes.quote;
    songText.textContent = apiQuotes.song;
    albumText.textContent = apiQuotes.album;
    displayAlbumCover(apiQuotes.album); // Update album cover

    complete();

}

//show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}






function displayAlbumCover(albumName) {
    // Clear the previous cover image
    imageList.innerHTML = '';

    // Find the matching album cover
    const album = coverImage.find(album => album.albumPic === albumName);
    if (album) {
        const img = document.createElement('img');
        img.src = album.coverPic;
        img.alt = `Cover of ${album.albumPic}`;
        imageList.appendChild(img);
    }
}


newQuoteBtn.addEventListener('click', fetchData);
fetchData();





