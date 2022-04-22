import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieService from '../../services/movieService';
import * as ratingService from '../../services/ratingService';
import * as noteService from '../../services/noteService';
import MovieCard from '../Common/MovieCard/MovieCard';
import Rating from '@mui/material/Rating';
import './Movie.css';

const Movie = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    useEffect(() => {
        movieService.getMovie(movieId)
            .then(result => {
                setMovie(result);
            })
            .catch(err => {
                console.log(err);
            })

        ratingService.getRating(movieId)
            .then(result => {
                if (result.rating) {
                    setRating(result.rating);
                }
            })
            .catch(err => {
                console.log(err);
            })


        noteService.getNote(movieId)
            .then(result => {
                if (result.text) {
                    setReview(result.text);
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

    const handleNoteChange = (e) => {
        const newValue = e.currentTarget.value; 
        noteService.addNote(movieId, newValue)
            .then(result => {
                setReview(newValue);
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
                <Rating
                    name="rating"
                    size="large"
                    value={rating}
                    onChange={(event, newValue) => handleRatingChange(event, newValue)}
                />
                <textarea
                    name="review"
                    placeholder="Your private notes and comments about the movie..."
                    value={review}
                    onChange={(event, newValue) => handleNoteChange(event)}>
                </textarea>
            </div>
        </>
    );
};

export default Movie;