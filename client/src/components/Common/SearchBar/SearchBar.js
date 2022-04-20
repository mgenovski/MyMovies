import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='bar'>
            <input type="text" id="search" placeholder='Search by movie title...' name="search" />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;