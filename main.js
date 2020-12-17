function getMovies(title) {
   return fetch(`http://www.omdbapi.com/?s=${title}&apikey=a5a7a164`)
  .then(response => {
    if (response.ok) {
    console.log(response)
    } else {
      Promise.reject ({response: response.status, response: response.statusText}
      )}
  })
  .catch(err => {
    console.log(err)
  })
  
  // .then(response => {response.json())
  // .then(data => console.log(data));
}

getMovies("batman")
.then(json => {
  for (const user of json.response) {
    console.log(user)
  }
})
