const baseUrl = 'http://localhost:3030/notes';

export const getNote = async (movieId) => {
    let response = await fetch(`${baseUrl}/${movieId}`);
    let result = await response.json();
    if(response.ok) {
        return result;
    } else {
        throw result;
    }
}

export const addNote = async (movieId, text) => {
    const data = {
        movieId,
        text
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