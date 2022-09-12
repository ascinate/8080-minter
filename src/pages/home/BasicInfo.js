import ProjectIcon from "./ProjectIcon";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

function BasicInfo(){
    return(
        <>
        <div className="inside-div-cm col-lg-9 mx-auto d-block">
            <h3>  Basic Info  </h3>
            <p> Let’s name your project! </p>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" name="projectname" className="form-control" placeholder="Project Name" required/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Project Symbol" required/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        
                        <ProjectIcon/>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default BasicInfo;