import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
