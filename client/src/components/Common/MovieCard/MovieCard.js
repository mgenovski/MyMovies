import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton.js';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <div className='movie-image'>
                <Link to={`/movies/${movie.id}`}>
                    {movie.image
                        ? <img src={movie.image.original} alt={movie.name} />
                        : <img src="https://fanart369.com/wp-content/themes/barberry/images/placeholder.jpg" alt="movie-cover" />
                    }
                </Link>
            </div>
            <div className='movie-info'>
                <h3>
                    <Link to={`/movies/${movie.id}`}>{movie.name} ({movie.premiered?.substring(0, 4)})</Link>
                </h3>
                <p>
                    {movie.genres?.join(', ')}
                    {movie.genres?.length > 0 && movie.runtime != null ? ' | ' : ''}
                    {movie.runtime != null ? `${movie.runtime} minutes` : ''}</p>
                <p>
                    {movie.summary?.replace(/<[^>]*>/g, '').slice(0, 700)}
                    {movie.summary?.replace(/<[^>]*>/g, '').slice(0, 700).length === 700 ? '...' : ''}
                </p>
                <p><a href={movie.officialSite ? movie.officialSite : movie.url} target="_blank" rel="noreferrer">Visit official site</a></p>
                <FavoriteButton
                    movieId={movie.id}
                    imgUrl={movie.image?.original ? movie.image.original : 'https://fanart369.com/wp-content/themes/barberry/images/placeholder.jpg'}
                />
            </div>
        </div>
    )
}

export default MovieCard;