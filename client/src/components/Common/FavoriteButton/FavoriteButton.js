import { useEffect, useState } from "react";
import * as favoriteService from '../../../services/favoriteService';
import './FavoriteButton.css'

const FavoriteButton = ({ movieId, imgUrl }) => {

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        favoriteService.getAll()
            .then(result => {
                const added = result.some(x => x.movieId === movieId);
                setFavorite(added);
            })
            .catch(err => {
                console.log(err);
            })
    }, [movieId]);

    const handleClick = () => {
        if(favorite) {
            favoriteService.deleteFromFavorites(movieId)
            .then(result => {
                setFavorite(false);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            favoriteService.addToFavorites(movieId, imgUrl)
            .then(result => {
                setFavorite(true);
            })
            .catch(err => {
                console.log(err);
            })
        }
    };

    return (
        <button
            className={favorite 
                ? 'favorite-button remove-from-favorites' 
                : 'favorite-button add-to-favorites'}
            onClick={handleClick}
        >
            {favorite ? 'Remove From Favorites' : 'Add To Favorites'}
        </button>
    );
};

export default FavoriteButton;