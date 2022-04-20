import { Link } from 'react-router-dom';
import SearchBar from '../Common/SearchBar/SearchBar';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">My Movie Collection</Link>
            </div>
            <div className='search-bar'>
                <SearchBar />
            </div>
        </header>
    );
};

export default Header;