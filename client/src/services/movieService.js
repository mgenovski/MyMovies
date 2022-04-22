const baseUrl = 'http://localhost:3030/movie';

export const getMovie = async (movieId) => {
    let response = await fetch(`${baseUrl}/${movieId}`);
    let result = await response.json();
    if(response.ok) {
        return result;
    } else {
        throw result;
    }
}