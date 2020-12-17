function getMovies(title) {
   return fetch(`http://www.omdbapi.com/?s=${title}&apikey=a5a7a164`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      Promise.reject ({response: response.status, response: response.statusText}
      )}
  })
  .catch(err => {
    console.log(err)
  })

}

function getMovieDetails(id) {
  return fetch(`http://www.omdbapi.com/?i=${id}&apikey=a5a7a164`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      Promise.reject ({response: response.status, response: response.statusText}
      )}
  })
  .catch(err => {
    console.log(err)
  })
}


addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const currentContent = document.getElementsByClassName('movies-wrapper');
    if (currentContent !== "") {
      currentContent[0].innerHTML = "";
    }
    const searchedMovie = document.getElementById("search-input").value;
    getMovies(searchedMovie)
    .then( json => {
      for (movie of json.Search) {
        getMovieDetails(movie.imdbID)
        .then((response) => {
          if (response.Poster === "N/A") {
            response.Poster = "img/poster.jpg";
          }
          const moviesWrapper = document.querySelector('.movies-wrapper');
          moviesWrapper.insertAdjacentHTML('beforeend', `
          <div class="image-container">
            <img class="image-poster" src="${response.Poster}" alt="${response.Title}">
            <div class="content-container">
              <h2>${response.Title}</h2>
              <p class="ratings">${response.imdbRating}/10</p>
              <p class="plot">${response.Plot}</p>
            </div>
          </div>
          `)
        })
      }
    })
  }
});

const clear = document.getElementsByClassName('clear');
addEventListener('click', e => {
  if (e.target.className === "clear") {
    let inputValue = document.getElementById("search-input");
    inputValue.value = "";
  }
})
