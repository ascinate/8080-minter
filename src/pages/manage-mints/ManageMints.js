import React from "react";
import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Darft from "./components/Draft";
import Launched from "./components/Launched";
import Header from "../../Header";


const ManageMints=()=>{
    document.title ="8080 Mint - Manage Mints"
    return(
        <>
        <Header/>
        <div className="comon-all-body hmepage-1 float-start w-100 mt-3">

            <div className="comon-div">
              <div className="container">
                       <h1 className="main-haeding text-center text-white"> Manage Mints </h1>
                        <p className="col-lg-9 d-block mx-auto text-center text-white"> Launch a mint dApp with a custom sale flow below. You can choose from over 10 EVM-
                        compatible chains. </p>
                   <div className="tabs-section my-5">
                    
                      <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link " id="pills-home-tab" 
                          data-bs-toggle="pill" data-bs-target="#pills-launched" type="button" 
                          role="tab" >Launched</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="pills-profile-tab" 
                          data-bs-toggle="pill" data-bs-target="#pills-drafts" 
                          type="button" role="tab" >Drafts</button>
                        </li>
                       
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade" id="pills-launched" role="tabpanel">
                            
                            <div className="total-lonched-div-main py-5 w-100">
                               <Launched/>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="pills-drafts" role="tabpanel">
                              <Darft/>
                        </div>
                        
                      </div>
                 
                   </div>

              </div>

            </div>

        </div>
        </>
    )
};
export default ManageMints;