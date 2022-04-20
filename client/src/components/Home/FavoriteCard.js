import { Link } from 'react-router-dom';

const FavoriteCard = ({ favorite }) => {
    return (
        <Link to={`/movies/${favorite.movieId}`}>
            <img src={favorite.imgUrl} alt={favorite.movieId} />
        </Link>
    );
}

export default FavoriteCard;