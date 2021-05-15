const API_KEY = 'api_key=4c3ad92dbbd8b98710480f66cb2e91bf';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const API_IMAGE = 'https://image.tmdb.org/t/p/w500';
const film = document.querySelector('.film');

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
   .then(res=>res.json())
   .then(data=>{
      console.log(data.results);
      showMovies(data.results);
   }
  )
}


function showMovies(data) {

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movieBlock');
        movieEl.innerHTML = `
             <main class="main">
                <div class="movie">
                  <img class="image" src="${API_IMAGE+poster_path}" alt="${title}">
                </div>
                <div class="divName">
                  <h3 class="movieName">${title}</h3>
                  <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>
             </main>

             <div class="overview">
                <p>${overview}</p>
             </div> 
        
        `
        film.append(movieEl)
    })
}

function getColor(vote){
    if(vote > 7) {
       return 'orange';
    }else if(vote <= 7) {
        return 'green'
    }
}