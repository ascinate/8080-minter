import React from "react";
import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <>
         <footer className="float-start w-100 py-5">
            <div className="container">
                <div className="col-lg-8 text-center d-block mx-auto">
                     <h3 className="text-white mb-0"> Built at </h3>
                     <NavLink to="/" className="footer-lg">
                         <img src="images/0xytocinLogo.gif" alt="footer logo"/>
                     </NavLink>
                     <p className="text-white mb-0"> All Rights Reserved</p>
                </div>
            </div>
         </footer>
        </>
    )
};
export default Footer;