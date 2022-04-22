import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../Common/SearchBar/SearchBar';
import * as searchService from '../../services/searchService';
import MovieCard from '../Common/MovieCard/MovieCard';
import './Search.css';

const Search = () => {
    const { title } = useParams();

    if (!title) {
        return (
            <div className='search'>
                <h2>Search</h2>
                <SearchBar />
            </div>
        );
    }
    return <SearchResults />
}

const SearchResults = () => {

    const { title } = useParams();
    const [searchList, setSearchList] = useState([]);
    
    useEffect(() => {
        searchService.searchTitle(title)
            .then(result => {
                setSearchList(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, [title]);


    return (
        <div className='search'>
            <h2>Search</h2>
            <SearchBar />
            {searchList.length > 0
                ? ( 
                    <div className="all-lists">
                        {searchList.map(x => <MovieCard key={x.show.id} movie={x.show} />)}
                    </div>
                )
                : <div className="no-items"><p>No movies in database!</p></div>
            }
        </div>
    );
};

export default Search;