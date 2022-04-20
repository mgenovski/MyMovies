import { useEffect, useState } from "react";
import * as favoriteService from '../../services/favoriteService';
import FavoriteCard from "./FavoriteCard";
import './Home.css';



const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        favoriteService.getAll()
            .then(result => {
                setFavorites(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            {favorites.length > 0
                ? ( 
                    <div className="favorite-cards">
                        {favorites.map(x => <FavoriteCard key={x._id} favorite={x} />)}
                    </div>
                )
                : <div className="no-items"><p>No favorites in database!</p></div>
            }
        </div>
    );
}

export default Favorites;