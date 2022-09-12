
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Contract=()=>{
    return(
        <>
        <div className="inside-div-cm col-lg-9 mx-auto d-block">
                <h3>  Contract Specs  </h3>
                <p> Key configuration of the minting contract. </p>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Pick Chain</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Implementation</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>


                        </div>
                    </div>
                
                </div>
         </div>
        </>
    )
};
export default Contract;


