const baseUrl = 'http://localhost:3030/favorites';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}`);
    let result = await response.json();
    if(response.ok) {
        return result;
    } else {
        throw result;
    }
}

export const addToFavorites = async (movieId, imgUrl) => {
    const data = {
        movieId,
        imgUrl
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

export const deleteFromFavorites = async (movieId) => {
    let response = await fetch(`${baseUrl}/${movieId}`, {
        method: 'DELETE',
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