import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import BasicForm from "./components/BasicForm";
import Header from "../../Header";
import FileHome from "./FileHome";


const BasicConfig=()=>{
    document.title ="8080 Mint - Home"

    useEffect(() => {
         
          window.scrollTo(0, 0)
        });

    return(
        <>
           <Header/>
           <div className="comon-all-body hmepage-1 float-start w-100 mt-3">
                
                <div className="comon-div">
                  <div className="container">
                        <h1 className="main-haeding text-center text-white"> Launch Mint </h1>
                        <p className="col-lg-9 d-block mx-auto text-center text-white"> Launch a mint dApp with a custom sale flow below. You can choose from over 
                        10 EVM-compatible chains. </p>
                        <div className="link-gopage mt-5">
                            <ul className="list-unstyled d-flex justify-content-center align-items-center">
                                <li className="active">
                                    
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">1</span>
                                            <h5> Basic Config </h5>
                                        </div>
                                    
                                </li>
                                <li>
                                    
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">2</span>
                                            <h5> Allowlists </h5>
                                        </div>
                                    
                                </li>
                                <li>
                                    
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">3</span>
                                            <h5> Pricing </h5>
                                        </div>
                                    
                                </li>
                            </ul>
                        </div>
                        <div className="comon-from my-5">
                             <div className="blur"></div>
                        
                             <div className="main-forms">
                                 <BasicForm/>

                                 <FileHome/>
                            </div>


                           
                        </div>

                     
                  </div>
                </div>
           </div>
        </>
    )
};
export default BasicConfig;
