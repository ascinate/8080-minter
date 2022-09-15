import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaDiscord, FaGlobe } from "react-icons/fa";

function TopReBody(){
    
      return(

        <>
            <div className="top-register-div mt-5">
                <div className="row align-items-center">
                   <div className="col-lg-4">
                       <figure className="m-0 bn-main1">
                           <img src="images/pg.jpg" alt="pg"/>
                       </figure>
                   </div>
                   <div className="col-lg-8 ps-lg-4">
                      <h2> Project Godjira </h2>
                      <p> A Collection Of 333 Unique Genesis Godjiras and 3333 gen2 
                      Godjiras on th ethereum blockchain living as NFTs</p>
                      <ul className="list-unstyled re-socal-ui d-flex align-items-center mt-5">
                          <li>
                              <NavLink to="/" className="text-center">
                                  <figure>
                                     <FaTwitter/>
                                  </figure>
                                  <span className="d-block">
                                   @PGodjira
                                  </span>
                              </NavLink>
                          </li>
                          <li>
                              <NavLink to="/" className="text-center">
                                  <figure>
                                     <FaDiscord/>
                                  </figure>
                                  <span className="d-block">
                                   projectgodjira
                                  </span>
                              </NavLink>
                          </li>
                          <li>
                              <NavLink to="/" className="text-center">
                                  <figure>
                                     <FaGlobe/>
                                  </figure>
                                  <span className="d-block">
                                    projectgodjira.io
                                  </span>
                              </NavLink>
                          </li>
                      </ul>
                   </div>
                </div>            
            </div>
        </>
      )

};
export default TopReBody;