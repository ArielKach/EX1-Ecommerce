import './App.css';
import MainPage from './Main/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainPage></MainPage>
      </Router>
    </div>
  );
}

export default App;
