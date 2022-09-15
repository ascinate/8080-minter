import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaWallet } from "react-icons/fa";
import { BsXCircleFill, BsArrowRight } from "react-icons/bs";



function RegisterTop(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light float-start w-100">
                <div className="container">
                   <NavLink  className="navbar-brand" to="/"> 
                        <img src="images/8080.png" alt="logo"/>
                   </NavLink>
                    
                    
                   <div className="right-rgeiste-menu">
                        <NavLink to="/" className="btn rgister-tp-btn">
                        Logoin to Register
                        </NavLink>
                        <NavLink to="/" className="btn connect-bnt">
                        <FaWallet/>   Login <BsArrowRight/>
                        
                        </NavLink>
                    </div>

                </div>
        </nav>



        </>
    )
};
export default RegisterTop;