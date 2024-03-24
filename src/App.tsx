import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataProvider from './DataProvider';
import Home from './components/Home';
import Search from './components/Search';
import Categories from './components/Categories';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default App;
