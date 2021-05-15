const API_KEY = '4c3ad92dbbd8b98710480f66cb2e91bf';
const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=';
const BASE_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key='+API_KEY;


async function startSearch(url) {
    
    let response = await fetch(url);
    let data = await response.json();

    console.log(data.results);
}
console.log(startSearch(BASE_URL));

