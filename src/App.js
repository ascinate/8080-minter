
import './App.css';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './App.css';
import {BrowserRouter as Router , Routes, Route, Outlet,Switch, useLocation} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import BasicConfig from './pages/home/BasicConfig';
import Allowlist from './pages/allowlist/Allowlist';
import ManageMints from "./pages/manage-mints/ManageMints";
import Pricing from './pages/pricing/Pricing';
import Connect from './pages/connect/Connect';
import Register from './pages/register/Register';
import ManageAllowlist from "./pages/manage-allowlist/ManageAllowlist";
import Footer from './Footer';





function App(props) {

  return (
    
    <div className="App">
      <Router>
            <Routes>
                <Route exact="true" path="/basicconfig" element={<BasicConfig/>}/>
                <Route exact="true" path="/" element={<Connect/>}/>
                <Route exact="true" path="/allowlist" element={<Allowlist/>}/>
                <Route exact="true" path="/managemints" element={<ManageMints/>}/>
                <Route exact="true" path="/pricing" element={<Pricing/>}/>
                <Route exact="true" path="/register" element={<Register/>}/>
                <Route exact="true" path="/manageallowlist" element={<ManageAllowlist/>}/>
                
            </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
