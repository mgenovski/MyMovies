import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieService from '../../services/movieService';
import * as ratingService from '../../services/ratingService';
import MovieCard from '../Common/MovieCard/MovieCard';
import Rating from '@mui/material/Rating';
import './Movie.css';

const Movie = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(false);
    const [rating, setRating] = useState(0)

    useEffect(() => {
        movieService.getMovie(movieId)
            .then(result => {
                setMovie(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, [movieId]);

    useEffect(() => {
        ratingService.getRating(movieId)
            .then(result => {
                if (result.rating) {
                    setRating(result.rating);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [movieId]);

    const handleRatingChange = (e, newValue) => {
        ratingService.addRating(movieId, newValue)
            .then(result => {
                setRating(newValue);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <>
            <div className='movie'>
                {movie ? <MovieCard movie={movie} /> : 'Loading...'}
            </div>
            <div className='review'>
                <h3>Your Review</h3>
                <Rating name="rating" size="large" value={rating} onChange={(event, newValue) => handleRatingChange(event, newValue)} />
            </div>
        </>
    );
};

export default Movie;