import './App.css';
import MainPage from './Main/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Product from './Product/Product';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<Product />} path={'/:productId'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
