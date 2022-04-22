const baseUrl = 'http://localhost:3030/ratings';

export const getRating = async (movieId) => {
    let response = await fetch(`${baseUrl}/${movieId}`);
    let result = await response.json();
    if(response.ok) {
        return result;
    } else {
        throw result;
    }
}

export const addRating = async (movieId, rating) => {
    const data = {
        movieId,
        rating
    }
    let response = await fetch(`${baseUrl}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
    if(response.ok) {
        return result;
    } else {
        throw result;
    }
}