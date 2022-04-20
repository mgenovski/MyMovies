import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">My Movie Collection</Link>
            </div>
            <div className='search-bar'>

            </div>
        </header>
    );
};

export default Header;