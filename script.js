const count = 10;
const APIKey = '2yoYXehDcL6EPw9MsFGLNPO1hZdDvVtHYBAzM69D';
const APIUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${APIKey}&count=${count}`;

let resultsArray = [];

async function getNasaImg() {
    try {
        const reponse = await fetch(APIUrl);
        resultsArray = await reponse.json();
        console.log(resultsArray);

    } catch (error) {

    }
}

getNasaImg();