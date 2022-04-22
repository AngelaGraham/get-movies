let API_KEY = "..."

 async function getMoviesByName(name) {
   const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${name}`;
   const response = await
   fetch (url)
}
export {getMoviesByName}