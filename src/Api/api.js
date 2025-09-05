const API_KEY = "b486026c";


export const fetchMovies = async (search) => {
    try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
        );
        const data = await res.json();
        return data.Search || [];
    } catch (error) {
        console.log(error);
        return null;
    }
}



export const fetchMovieDetails = async (id) => {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
