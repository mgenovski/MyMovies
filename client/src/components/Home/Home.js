import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Home.css';
import Favorites from './Favorites.js';

const Home = () => {
    return (
        <>
            <div className='hero'>
                <div className='hero-text'>
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button component={Link} variant="contained" to="/search">Search</Button>
                </div>
            </div>
            <Favorites />
        </>
    );
};

export default Home;