import React, { useState, useEffect } from "react";
import FilesLogo from "./FilesLogo";
import BackgroundImg from "./BackgroundImg";
import ProjectIcon from "./ProjectIcon";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus, } from "react-icons/bi";
import { BsArrowRight ,BsX } from "react-icons/bs";
import { Button } from 'semantic-ui-react';
import ValidForm from 'react-valid-form-component';
import { FaDiscord } from "react-icons/fa";
import FileNew from "./FileNew";







const BasicForm=()=>{

    const [projectName, setProjectName] = useState("");
    const [validName, setValidName] = useState("");
    const [pickName, setPickName] = useState("");
    const [impName, setImpName] = useState("");
    const [fillValidName, setFillValidName] = useState("");
    const [supplyName, setSupplyName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [baseName, setBaseName] = useState("");
    const [baseUiName, setBaseUiName] = useState("");
    const [walletName, setWalletName] = useState("");
    const [splitName, setSplitName] = useState("");
    const [linkName, setLinkName] = useState("");
    
    
    





    const [color, setColor]= useState('#424FE6');
    const [colorSec, setSecColor]= useState('#A742E6');
    const [colorPri, setPriColor]= useState('#E64242');


    const [isActive, setActive] = useState("false");

      const handleToggle = () => {
        setActive(!isActive);
      };

      const navRef = React.useRef(null);
      const navRefnext = React.useRef(null);

      

      const onAddClick = (e) => {
        navRef.current.classList.add("show-connntect-card");
      };
    
      const onRemoveClick = (e) => {
        navRef.current.classList.remove("show-connntect-card");
      };


      const onAddtwitterClick = (e) => {
        navRefnext.current.classList.add("show-connntect-tw");
      };

      const onRemovetwitterClick = (e) => {
        navRefnext.current.classList.remove("show-connntect-tw");
      };





    const [formValues, setFormValues] = useState([{ name: "", email : ""}]);

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
     }
        
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
     }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }


    return(
        <>
        <ValidForm>

                 <div className="inside-div-cm col-lg-9 mx-auto d-block">
                        <h3>  Basic Info  </h3>
                        <p> Let’s name your project! </p>
                        <div className="row">
                            <div className="col-lg-6">
                             
                                <div className="form-group">
                                    <input type="text"
                                     className="form-control" 
                                     placeholder="Project Name"
                                     name="projectname"
                                        id="validation"
                                        required
                                        /* validation rules */
                                        minLength="3"
                                        maxLength="50"

                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                     />
                                     
                                </div>

                             
                            
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                    placeholder="Project Symbol" 
                                    name="validation"
                                    id="validation"
                                    required
                                    minLength="3"
                                    maxLength="50"

                                    value={validName}
                                     onChange={(e) => setValidName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    
                                    <ProjectIcon/>
                                    
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
                                        <select class="form-select" 
                                        value={pickName}
                                     onChange={(e) => setPickName(e.target.value)}>
                                            <option selected>Pick Chain</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        
                                        <select class="form-select" 
                                        value={impName}
                                        onChange={(e) => setImpName(e.target.value)}>
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
                                            <input type="text"  className="form-control" placeholder="URL Slug"
                                            name="url"
                                            id="validation"
                                            required
                                            minLength="3"
                                            maxLength="50"
                                            value={fillValidName}
                                            onChange={(e) => setFillValidName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            
                                                <FileNew/>
                                        
                                    
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



               
                <div className="inside-div-cm col-lg-9 mx-auto d-block">
                        <h3> Mint Configuration </h3>
                        <p> Specify total supply, owner reserves and the mint limit per
                        wallet. </p>
                        <div className="comon-opcity-div">
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Total Supply </label>
                                        <input  type="text" className="form-control" 
                                        name="supply"
                                        id="validation"
                                        required
                                        minLength="3"
                                        maxLength="50"
                                        value={supplyName}
                                        onChange={(e)=>setSupplyName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Owner Reserves </label>
                                        <input  type="text" className="form-control"
                                        name="owner"
                                        id="validation"
                                        required
                                        minLength="3"
                                        maxLength="50"
                                        value={ownerName}
                                        onChange={(e)=>setOwnerName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div className="d-md-flex justify-content-between align-items-center">
                                        <label> Metadata Base URI [Pre-Reveal] </label>
                                        <span> Leave blank for mints with instant reveal.</span>
                                        </div>
                                        
                                        <input type="text" className="form-control" 
                                        name="metadatauRI"
                                        id="validation"
                                        required
                                        minLength="3"
                                        maxLength="50"
                                        value={baseName}
                                        onChange={(e)=>setBaseName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label> Metadata Base URI [Post-Reveal] </label>
                                        <input type="text" className="form-control" 
                                        name="metadatabaseuRI"
                                        id="validation"
                                        required
                                        minLength="3"
                                        maxLength="50"
                                        value={baseUiName}
                                        onChange={(e)=>setBaseUiName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                 </div>


                 <div className="inside-div-cm col-lg-9 mx-auto d-block">
                        <h3> Withdrawal </h3>
                        <p> Specify the addresses and the percentage from the mint they make at withdrawal. </p>
                        

                        {formValues.map((element, index) => (
                            <div className="comon-opcity-div" key={index}>
                                    

                            <div className="row">
            
                                <div className="col-lg-8">
                                    <div className="form-group">
                                        <label> Wallet Address </label>
                                        <input type="text" className="form-control" 
                                        name="wallet"
                                        id="validation"
                                        required
                                        minLength="3"
                                        maxLength="50"
                                        value={walletName}
                                        onChange={(e)=>setWalletName(e.target.value)}
                                     
                                    />
                                    </div>
                                </div>
            
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label> Percentage Split </label>
                                        <input type="text" className="form-control"
                                        name="percentage"
                                        value={splitName}
                                        onChange={(e)=>setSplitName(e.target.value)}
                                      
                                        />
                                    </div>
                                </div>
            
                             </div>

                                    {
                                        index ? 
                                        <button type="button"  className="button btn btn-danger remove" onClick={() => removeFormFields(index)}>Remove</button> 
                                        : null
                                    }
                            </div>
                          ))}

                        
     
                    <button type="button" className="btn btn-opt-add" onClick={() => addFormFields()}>
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
                                            <input type="text" className="form-control"
                                            value={linkName}
                                            onChange={(e)=>setLinkName(e.target.value)}
                                             />
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                
                </div>

                <div className="inside-div-cm col-lg-9 mx-auto d-block">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                            <div ref={navRef}>
                                <div className="socal-div1">
                                
                              
                                    <div className="top-counnect-div-socl">
                                        <figure>
                                        <img src="images/icon1.png" alt="icon2"/>
                                        </figure>
                
                                        <button type="button" className="btn comon-count1" onClick={onAddClick}>
                                            Connect Discord
                                        </button>
                                    </div>


                                    <div className="div-show-couunt-ts-cord">
                                            <div className="d-flex align-items-center">
                                                <figure>
                                                    <FaDiscord/>
                                                </figure>
                                                <div className="liks-div d-flex align-items-center">
                                                <h5> Nash#4218 Connected </h5> 
                                                <button className="btn" onClick={onRemoveClick}>
                                                    <BsX/>
                                                </button>
                                                </div>
                                            </div>

                                            <div className="offer-connect-1">
                                                <p> ChainScouts NFT </p>
                                            </div>
                                    </div>
                               

                                  
                                      
                                  
                                </div>
                            </div>

                            </div>
            
                            <div className="col">
                                <div className="comon-main-socal-s1" ref={navRefnext}>
                                    <div className="socal-div1">
                                       <div className="twite-div">
                                            <figure>
                                            <img src="images/icons8-twitter.png" alt="icon2"/>
                                            </figure>
                    
                                            <button type="button" className="btn comon-count1" onClick={onAddtwitterClick}>
                                                Connect Twitter
                                            </button>

                                        </div>

                                        <div className="div-show-couunt-ts">
                                            <div className="d-flex align-items-center">
                                                <figure>
                                                    <img src="images/icons8-twitter.png" alt="icon2"/>
                                                </figure>
                                                <div className="liks-div d-flex align-items-center">
                                                <h5> Nash#4218 Connected  </h5> 
                                                <button className="btn" onClick={onRemovetwitterClick}>
                                                    <BsX/>
                                                </button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                   
                                </div>

                            </div>
                        </div>
                </div>

                <div className="inside-div-cm col-lg-9 mx-auto d-block">
                    <div className="d-sm-flex align-items-center justify-content-between">
                            <div className="next-div">
                                <NavLink to="/" className="btn pre-btn"> Preview </NavLink>
                            </div>
                            <div className="right-pre-div d-flex align-items-center justify-content-between">
                                
                                <button type='button' className="btn pre-btn">Save</button>
                                <button type='submit' className="btn next-btn">Next <span> <BsArrowRight/> </span></button>
                                

                            </div>
                    </div>
                </div>

            </ValidForm>
        </>
    )
};
export default BasicForm;