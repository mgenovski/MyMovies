import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Movie from './components/Movie/Movie';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path="/movies/:movieId" element={<Movie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
