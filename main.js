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

getMovies("spiderman")
.then( json => {
  for (movie of json.Search) {
    console.log(movie)
  }
})
