import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import BackgroundImg from "./BackgroundImg";
import FilesLogo from "./FilesLogo";

const LookFill=()=>{
    const [color, setColor]= useState('#424FE6');
    const [colorSec, setSecColor]= useState('#A742E6');
    const [colorPri, setPriColor]= useState('#E64242');

    return(
        <>
        <div className="inside-div-cm col-lg-9 mx-auto d-block">
               <h3>  Look & Feel  </h3>
              <p> Now configure the look & feel of your mint site. The slug allows users to find it - the product will be launched at
               <NavLink to="/" className="links-nm"> https://.8080.tools </NavLink> </p>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input type="text" name="url" className="form-control" placeholder="URL Slug"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            
                                <FilesLogo/>
                           
                    
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                           
                                 <BackgroundImg/>
                           
                    
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="comon-color-div1">
                            <label> Primary Colour </label>
                            <div className="color-dvm d-flex justify-content-between align-items-center">
                                <h5 className="m-0">
                                    {colorPri}
                                </h5> 

                                
                                <input type="color" value={colorPri} name="pricolor" className="form-control form-control-color" onChange={(e)=>setPriColor(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="comon-color-div1">
                            <label> Secondary Colour </label>
                            <div className="color-dvm d-flex justify-content-between align-items-center">
                                <h5 className="m-0">
                                {colorSec}
                                </h5>
                                <input type="color" value={colorSec} name="secondcolor" className="form-control form-control-color" onChange={(e)=>setSecColor(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="comon-color-div1">
                            <label> Tertiary Colour </label>
                            <div className="color-dvm d-flex justify-content-between align-items-center">
                                <h5 className="m-0">
                                {color}
                                </h5>
                                <input type="color" value={color} name="tertcolor" className="form-control form-control-color" onChange={(e)=>setColor(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                
                
                </div>
        </div>
        </>
    )
};
export default LookFill;