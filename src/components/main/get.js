async function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=9acf687b824c5353de69ad08569cdbdb&language=pt-BR`;
  const response = await fetch(url);
  const json = await response.json();
  return await json;
}

async function getName(name) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=fdeab699e71d0a1e88b79ec90e5a4e30&query=${name}`;
  const response = await fetch(url);
  const json = await response.json();
  return await json;
}

async function getPopular() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=fdeab699e71d0a1e88b79ec90e5a4e30&language=pt-BR&page=1";
  const response = await fetch(url);
  const json = await response.json();
  return await json;
}

async function getTopRated() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=fdeab699e71d0a1e88b79ec90e5a4e30&language=pt-BR&page=1";
  const response = await fetch(url);
  const json = await response.json();
  return await json;
}

async function getSimilarMovie(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=fdeab699e71d0a1e88b79ec90e5a4e30&language=en-US&page=1`
  const response = await fetch(url)
  const json = response.json()
  return await json;
}


export { getMovie, getName, getPopular, getTopRated, getSimilarMovie };
