
import './App.css';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './App.css';
import {BrowserRouter as Router , Routes, Route, Outlet, useLocation} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from './pages/home/Home';
import Allowlist from './pages/allowlist/Allowlist';
import ManageMints from "./pages/manage-mints/ManageMints";
import Pricing from './pages/pricing/Pricing';
import ConnectWalllet from './pages/connect-walllet/ConnectWalllet';
import Register from './pages/register/Register';
import Header from './Header';
import Footer from './Footer';





function App() {

  const { pathname } = window.location;
  let HideHeader = window.location.pathname == '/connectwalllet' || window.location.pathname === '/register' ? null : <Header />

  return (
    <div className="App">
      <Router>
     
            

           {HideHeader}

            <Routes>
                <Route exact="true" path="/" element={<Home/>}/>
                <Route exact="true" path="/allowlist" element={<Allowlist/>}/>
                <Route exact="true" path="/managemints" element={<ManageMints/>}/>
                <Route exact="true" path="/pricing" element={<Pricing/>}/>
                <Route exact="true" path="/connectwalllet" element={<ConnectWalllet/>}/>
                <Route exact="true" path="/register" element={<Register/>}/>
                
            </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
