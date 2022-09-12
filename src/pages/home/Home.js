import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import $ from "jquery";


$(document).ready(function(){
"use strict";

(function (document, window, index) {
  var inputs = document.querySelectorAll(".inputfile");
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener("change", function (e) {
      var fileName = "";
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute("data-multiple-caption") || "").replace(
          "{count}",
          this.files.length
        );
      else fileName = e.target.value.split("\\").pop();

      if (fileName) label.querySelector("span").innerHTML = fileName;
      else label.innerHTML = labelVal;
    });

    // Firefox bug fix
    input.addEventListener("focus", function () {
      input.classList.add("has-focus");
    });
    input.addEventListener("blur", function () {
      input.classList.remove("has-focus");
    });
  });
})(document, window, 0);
});



function Home(){
    document.title ="Free Mint - Home"
    const [color, setColor]= useState('#424FE6');
    const [colorSec, setSecColor]= useState('#A742E6');
    const [colorPri, setPriColor]= useState('#E64242');
   
    return(
        <>
           <div className="comon-all-body hmepage-1 float-start w-100 mt-3">
                
                <div className="comon-div">
                  <div className="container">
                        <h1 className="main-haeding text-center text-white"> Launch Mint </h1>
                        <p className="col-lg-9 d-block mx-auto text-center text-white"> Launch a mint dApp with a custom sale flow below. You can choose from over 
                        10 EVM-compatible chains. </p>
                        <div className="link-gopage mt-5">
                            <ul className="list-unstyled d-md-flex justify-content-center align-items-center">
                                <li className="active">
                                    <NavLink to="/">
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">1</span>
                                            <h5> Basic Config </h5>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">2</span>
                                            <h5> Allowlists </h5>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">3</span>
                                            <h5> Pricing </h5>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="comon-from my-5">
                             <div className="blur"></div>
                        
                             <div className="main-forms">
                                <form method="get" action="name">
                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                       <h3>  Basic Info  </h3>
                                       <p> Let’s name your project! </p>
                                       <div className="row">
                                          <div className="col-lg-6">
                                             <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Project Name" required/>
                                             </div>
                                          </div>
                                          <div className="col-lg-6">
                                             <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Project Symbol" required/>
                                             </div>
                                          </div>
                                          <div className="col-lg-12">
                                             <div className="form-group">
                                                <div className="box">
                                                    <input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                                    <label for="file-1">
                                                     <span>Project Icon (500x500) &hellip;</span></label>
                                                     <BiUpload/>
                                                </div>
                                                
                                             </div>
                                          </div>
                                       </div>
                                    </div>

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

                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                       <h3>  Look & Feel  </h3>
                                       <p> Now configure the look & feel of your mint site. The slug allows users to find it - the product will be launched at
                                       <NavLink to="/" className="links-nm"> https://.8080.tools </NavLink> </p>
                                       <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="URL Slug" required/>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="box">
                                                        <input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                                        <label for="file-1">
                                                        <span>Project Logo (png) &hellip;</span></label>
                                                        <BiUpload/>
                                                    </div>
                                            
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="box">
                                                        <input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                                        <label for="file-1">
                                                        <span>Background image (1920 x1080) &hellip;</span></label>
                                                        <BiUpload/>
                                                    </div>
                                            
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="comon-color-div1">
                                                    <label> Primary Colour </label>
                                                    <div className="color-dvm d-flex justify-content-between align-items-center">
                                                        <h5 className="m-0">
                                                           {colorPri}
                                                        </h5> 
                                                        <input type="color" value={colorPri} className="form-control form-control-color" onChange={(e)=>setPriColor(e.target.value)} />
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
                                                        <input type="color" value={colorSec} className="form-control form-control-color" onChange={(e)=>setSecColor(e.target.value)}/>
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
                                                        <input type="color" value={color} className="form-control form-control-color" onChange={(e)=>setColor(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                         
                                       </div>
                                    </div>

                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                       <h3> Mint Configuration </h3>
                                       <p> Specify total supply, owner reserves and the mint limit per
                                        wallet. </p>
                                        <div className="comon-opcity-div">
                                            <div className="row">

                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                       <label> Total Supply </label>
                                                       <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                       <label> Owner Reserves </label>
                                                       <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                       <div className="d-flex justify-content-between align-items-center">
                                                          <label> Metadata Base URI [Pre-Reveal] </label>
                                                          <span> Leave blank for mints with instant reveal.</span>
                                                       </div>
                                                       
                                                       <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                       <label> Metadata Base URI [Post-Reveal] </label>
                                                       <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>


                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                       <h3> Withdrawal </h3>
                                       <p> Specify the addresses and the percentage from the mint they make at withdrawal. </p>
                                        <div className="comon-opcity-div">
                                            <div className="row">

                                                <div className="col-lg-8">
                                                    <div className="form-group">
                                                       <label> Wallet Address </label>
                                                       <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                       <label> Percentage Split </label>
                                                       <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>

                                               
                                                
                                                
                                            </div>
                                        </div>

                                        <button type="button" className="btn btn-opt-add">
                                            <BiPlus/> Add Wallet
                                        </button>
                                    </div>

                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                       <h3> Connect Socials </h3>
                                       <p> Specify total supply, owner reserves and the mint limit per wallet. </p>
                                        <div className="comon-opcity-div">
                                            <div className="row">

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                       <label> Project Website Link </label>
                                                       <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>

                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                       <div className="row row-cols-1 row-cols-lg-2">
                                           <div className="col">
                                               <div className="socal-div1">
                                                   <figure>
                                                      <img src="images/icon1.png" alt="icon2"/>
                                                   </figure>

                                                   <button type="button" className="btn comon-count1">
                                                        Connect Discord
                                                   </button>
                                               </div>
                                           </div>

                                           <div className="col">
                                               <div className="socal-div1">
                                                   <figure>
                                                      <img src="images/icons8-twitter.png" alt="icon2"/>
                                                   </figure>

                                                   <button type="button" className="btn comon-count1">
                                                        Connect Discord
                                                   </button>
                                               </div>
                                           </div>
                                       </div>
                                    </div>
                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                        <div className="d-md-flex align-items-center justify-content-between">
                                                <div className="next-div">
                                                    <NavLink to="/" className="btn pre-btn"> Preview </NavLink>
                                                </div>
                                                <div className="right-pre-div d-flex align-items-center justify-content-between">
                                                    <NavLink to="/" className="btn pre-btn"> Save </NavLink>
                                                    <NavLink to="/allowlist" className="btn next-btn"> Next <span> <BsArrowRight/> </span> </NavLink>
                                                </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                  </div>
                </div>
           </div>
        </>
    )
};
export default Home;
