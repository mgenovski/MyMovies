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