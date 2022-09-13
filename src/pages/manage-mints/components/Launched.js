import React, { useState } from "react";
import Locncedata from "./LounchedApi";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

function Launched(){
    const [ lonchedData , setLonchedData] =useState(Locncedata);
    console.log(lonchedData);
    return(
        <>
        {
            lonchedData.map((curElem) =>{
                const { id, titel, link, owner , url , minted , editlink, colletion, balance} = curElem;
                return(
                    <>
                   
                    <div className="launged-div-main">
                       <div className="blur"></div>
                        <div className="lon-content-box">
                            <div className="itesm-launged">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2 className="long-titel text-white"> {titel} </h2>

                                        <ul className="filed-edit d-flex align-items-center justify-content-start list-unstyled">
                                            <li>
                                            <NavLink to={editlink}> EDIT </NavLink>
                                            </li>
                                            <li>
                                            <NavLink to={link}> PAUSE </NavLink>
                                            </li>
                                            
                                            <li>
                                               <NavLink to={link}> Manage Allowlist </NavLink>
                                            
                                            </li>
                                            <li>
                                               <NavLink to={link}> Reveal </NavLink>
                                            
                                            </li>
                                            <li>
                                            <NavLink to={link}> PREVIEW </NavLink>
                                            </li>
                                        </ul>

                                     
                                    </div>
                                    <div className="col-lg-4">
                                        <p className="lon-time"> Launched on 2nd Jan, 2022 </p>
                                        
                                    </div>
                                </div>

                                <div className="loung-deta">
                                    <div className="row row-cols-1 row-cols-lg-5 g-lg-3">
                                        
                                        <div className="col">
                                            <div className="comon-lounched1 text-center">
                                            <div className="comon-top-l">
                                                    <h5> URL Slug </h5>
                                            </div>
                                            <div className="comon-top-b">
                                                    <NavLink to={link}> 
                                                        jirafammint <FaExternalLinkAlt/>
                                                    </NavLink>
                                            </div>
                                                
                                                
                                            </div>
                                        </div>

                                        <div className="col">
                                           <div className="comon-lounched1 text-center">
                                                <div className="comon-top-l">
                                                        <h5> Minted </h5>
                                                </div>
                                                <div className="comon-top-b">
                                                        <p> {minted}</p>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>


                                        <div className="col">
                                            <div className="comon-lounched1 text-center">
                                                <div className="comon-top-l">
                                                        <h5> Owners </h5>
                                                </div>
                                                <div className="comon-top-b">
                                                     <p> {owner}</p>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="comon-lounched1 text-center">
                                                <div className="comon-top-l">
                                                        <h5> Total Colletion </h5>
                                                </div>
                                                <div className="comon-top-b">
                                                     <p> {colletion}</p>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="comon-lounched1 text-center">
                                                <div className="comon-top-l">
                                                        <h5> Contract Balance </h5>
                                                </div>
                                                <div className="comon-top-b">
                                                    <p> {balance}</p>
                                                    <h6 className="withdraw"> Withdraw </h6>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                   
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    </>
                );
            })
        }
        
        </>
    )
};
export default Launched;