import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const navigate = useNavigate();

    const onSearch = e => {
        e.preventDefault();
        const form = e.currentTarget;
        let formData = new FormData(form);
        const title = formData.get('title');
        form.reset();
        navigate(`/search/${encodeURIComponent(title.trim())}`);
    };

    return (
        <div className='bar'>
            <form onSubmit={onSearch}>
                <input type="text" id="title" placeholder='Search by movie title...' name="title" />
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;