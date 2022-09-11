
import './App.css';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from './pages/home/Home';
import SetpsN8 from './pages/steps/SetpsN8';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
            <Routes>
                <Route exact="true" path="/" element={<Home/>}/>
                <Route exact="true" path="/setpsn8" element={<SetpsN8/>}/>
            </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
