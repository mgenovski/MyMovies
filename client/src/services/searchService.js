const baseUrl = 'http://localhost:3030/search';

export const searchTitle = async (title) => {
    let response = await fetch(`${baseUrl}/${title}`);
    let result = await response.json();
    if(response.ok) {
        return result;
    } else {
        throw result;
    }
}