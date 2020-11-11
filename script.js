const resultNav = document.getElementById('resultNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

const count = 10;
const APIKey = '2yoYXehDcL6EPw9MsFGLNPO1hZdDvVtHYBAzM69D';
const APIUrl = `https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=${count}`;


let resultsArray = [];


function updateDOM() {
    resultsArray.forEach((result) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const link = document.createElement('a');
        link.href = result.hdurl;
        link.title = 'View Full Image';
        link.target = '_blank';

        const image = document.createElement('img');
        image.src = result.url;
        image.alt = 'NASA pic';
        image.loading = 'lazy';
        image.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = result.title;

        const saveText = document.createElement('p');
        saveText.classList.add('clickable');
        saveText.textContent = 'Add to favorites';

        const cardText = document.createElement('p');
        cardText.textContent = result.explanation;

        const footer = document.createElement('small');
        footer.classList.add('text-muted');

        const date = document.createElement('strong');
        date.textContent = result.date;

        const copyright = document.createElement('span');
        copyright.textContent = ` ${result.copyright}`;

        footer.append(date, copyright);
        cardBody.append(cardTitle, saveText, cardText, footer);
        link.appendChild(image);
        card.append(link, cardBody);
        imagesContainer.appendChild(card);
    });
}




async function getNasaImg() {
    try {
        const reponse = await fetch(APIUrl);
        resultsArray = await reponse.json();
        console.log(resultsArray);
        updateDOM();
    } catch (error) {
        console.log(error);
    }
}

getNasaImg();