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
                const { id, titel, link, editlink, colletion, balance, auhor, pertage} = curElem;
                return(
                    <>
                   
                    <div className="launged-div-main">
                       <div className="blur"></div>
                        <div className="lon-content-box">
                            <div className="itesm-launged">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2 className="long-titel"> {titel} </h2>
                                        <p className="author-dl"> <NavLink to={link}>
                                        jirafammint <FaExternalLinkAlt/>
                                        </NavLink> •{pertage} Minted • {auhor} </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <p className="lon-time"> Launched on 2nd Jan, 2022 </p>
                                        <ul className="filed-edit d-flex align-items-center">
                                            <li>
                                            <NavLink to={editlink}> EDIT </NavLink>
                                            </li>
                                            <li>
                                            <NavLink to={link}> PAUSE </NavLink>
                                            </li>
                                            <li>
                                            <NavLink to={link}> PREVIEW </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="loung-deta">
                                    <div className="row row-cols-1 row-cols-lg-2">
                                    <div className="col">
                                        <div className="comon-lounched1 text-center">
                                            <h3> Total Collection </h3>
                                            <h2> {colletion} </h2> 
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="comon-lounched1 text-center">
                                            <h3> Contract Balance </h3>
                                            <h2> {balance} </h2> 
                                            <h3> WITHDRAW </h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-lg-flex justify-content-between align-items-center">
                                <NavLink to={link} className="btn pre-btn">
                                    Manage Allowlist
                                </NavLink>
                                <NavLink to={link} className="btn next-btn"> Manage <span> <BsArrowRight/> </span></NavLink>
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