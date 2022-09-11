import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light float-start w-100">
                <div className="container">
                   <NavLink  className="navbar-brand" to="/"> 
                        <img src="images/8080.png" alt="logo"/>
                   </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Mint </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Stake </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Marketplace </NavLink>
                        </li>
                        
                       
                        </ul>
                        
                    </div>

                    <button type="button" className="btn btn-aount1">
                       <span className="icon-name1">
                           <img src="images/metamasklogo.png" alt="icon-r"/>
                       </span>
                       <span> 0x2ec….9bb6 </span>
                    </button>
                </div>
        </nav>
        </>
    )
};
export default Header;