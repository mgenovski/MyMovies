import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='hero'>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link className="btn btn-pink" role="button" to="/search">Search</Link>
            </div>
            <div className='favorites'>
                <h2>Your Favorites</h2>
            </div>
        </>
    );
};

export default Home;