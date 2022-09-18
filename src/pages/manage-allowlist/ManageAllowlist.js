import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsArrowRight, BsX } from "react-icons/bs";
import ValidForm from 'react-valid-form-component';
import Multiselect from 'multiselect-react-dropdown';
import { BiEditAlt } from "react-icons/bi";
import BlukModal from "./components/BlukModal";
import MulitiDiv from "./components/MulitiDiv";
import MultiDivnext from "./components/MultiDivnext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import Header from "../../Header";


const ManageAllowlist=()=>{
    document.title ="8080 Mint - Manage Allowlist"

    const notify = () => toast("Save so easy!");
   
    const [upOption, setUpOtption] = useState (["Ox Option1", "OX Option2", "OX Option3",]);

    const [hidden, setHiddeno1] = useState(false);
    const [hidden1, setHiddeno2] = useState(false);
    const [hidden2, setHiddeno3] = useState(false);
    const [hidden3, setHiddeno4] = useState(false);

    const [hidden4, setHiddeno5] = useState(false);
    const [hidden5, setHiddeno6] = useState(false);
    const [hidden6, setHiddeno7] = useState(false);
    const [hidden7, setHiddeno8] = useState(false);

    const[hideselect, setHideSelect]= useState(true);

    const[hideselectnext, setHideSelectNext]= useState(true);

    return(
        <>
        <div className="bg"></div>
        <Header/>
        <div className="comon-all-body hmepage-1 float-start w-100 mt-3">

            <div className="comon-div">
              <div className="container">
              
              <ToastContainer />

                       <h1 className="main-haeding text-center text-white"> Manage Mints </h1>
                        <p className="col-lg-9 d-block mx-auto text-center text-white"> Launch a mint dApp with a custom sale flow below. You can choose from over 10 EVM-
                        compatible chains. </p>
                  
                        <div className="comon-from my-5">
                            <div className="blur"></div>
                            <div className="main-forms">
                                  <ValidForm>
                                       <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                          <h3> Manage Allowlists   </h3>
                                            <div className="comon-opcity-div">

                                                <div className="comon-pricing-div">
                                                    <div className="d-flex justify-content-between">
                                                        <h3>Gen 1</h3>
                                                        <button type="button" className="btn publick-btn" disabled>
                                                                Public Mint
                                                        </button>
                                                    </div>

                                                    <div className="form-group mt-4">
                                                      
                                                     <label> Price </label>
                                                            
                                                     
                                                      
                                                      <div className="inpy-div d-flex align-items-center">
                                                                <input type="text" className="form-control" required/>
                                                                <div className="slp">
                                                                    <select class="form-select" aria-label="Default select example">
                                                                            <option selected>ETH</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select>
                                                                </div>
                                                        </div>
                                                    </div>

                                                    <div className="row row-cols-1 row-cols-lg-2">
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <label> Limit Per Wallet </label>

                                                                <input type="text" className="form-control"
                                                                name="wallet"
                                                                id="validation"
                                                                required
                                                                minLength="3"
                                                                maxLength="50"
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <label> Max Allocated Supply </label>

                                                                <input type="text" className="form-control"
                                                                name="supply"
                                                                id="validation"
                                                                required
                                                                minLength="3"
                                                                maxLength="50"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>

                                            </div>
                                       </div>

                                       <div className="inside-div-cm col-lg-9 mx-auto d-block mb-3">
                                    
                                            <div className="comon-opcity-div">

                                                <div className="comon-pricing-div">
                                                        <h3>Gen 2</h3>

                                                       

                                                        <div className="form-group">
                                                             <div className="d-flex justify-content-between">
                                                                 
                                                                <MulitiDiv/>

                                                                

                                                                <div className="gp-btuuon-div">
                                                                    <button type="button" className="btn text-uppercase" onClick={()=> setHideSelect(false)}>
                                                                         delete all
                                                                    </button>
                                                                    <button type="button" className="btn text-uppercase">
                                                                         delete selected
                                                                    </button>
                                                                </div>
                                                             </div>
                                                        </div>

                                                        <div className="from-group">
                                                        { hideselect?
                                                            <div className="manin-select-div mb-4 d-flex align-items-center">
                                                              
                                                                {!hidden && <button className="btn com-btn-sel" onClick={() => setHiddeno1(true)}>
                                                                    Ox-Option 1 <BsX/>
                                                                </button>}

                                                                {!hidden1 && <button className="btn com-btn-sel" onClick={() => setHiddeno2(true)}>
                                                                    Ox-Option 2 <BsX/>
                                                                </button>}


                                                                {!hidden2 && <button className="btn com-btn-sel" onClick={() => setHiddeno3(true)}>
                                                                    Ox-Option 3 <BsX/>
                                                                </button>}


                                                                {!hidden3 && <button className="btn com-btn-sel" onClick={() => setHiddeno4(true)}>
                                                                    Ox-Option 4 <BsX/>
                                                                </button>}

                                                              
                                                                
                                                            </div>:null
                                                        }
                                                        </div>
                                                        
                                                        <div className="form-group">
                                                             <div className="d-flex justify-content-between">
                                                                  <label>Add addresses to the allowlist</label>
                                                                  <button type="button" className="btn y-color bulk-btnup" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                     bulk Upload
                                                                  </button>
                                                             </div>
                                                             

                                                              <input type="text" className="form-control"
                                                              name="walletnext"
                                                              id="validation"
                                                              required
                                                              minLength="3"
                                                              maxLength="50"
                                                              />

                                                        </div>
                                                        <div className="form-group mt-4">
                                                            <label> Price </label>
                                                            <div className="inpy-div d-flex align-items-center">
                                                                    <input type="text" className="form-control" required/>
                                                                    <div className="slp">
                                                                        <select class="form-select" aria-label="Default select example">
                                                                                <option selected>ETH</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>
                                                                    </div>
                                                            </div>
                                                        </div>

                                                        <div className="row row-cols-1 row-cols-lg-2">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label> Limit Per Wallet </label>

                                                                    <input type="text" className="form-control"
                                                                    name="walletnext"
                                                                    id="validation"
                                                                    required
                                                                    minLength="3"
                                                                    maxLength="50"
                                                                    />

                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label> Max Allocated Supply </label>

                                                                    <input type="text" className="form-control"
                                                                    name="supplynext"
                                                                    id="validation"
                                                                    required
                                                                    minLength="3"
                                                                    maxLength="50"
                                                                    />

                                                                </div>
                                                            </div>
                                                        </div>
                                                
                                                </div>
                                                
                                            </div>
                                       </div>

                                       <div className="inside-div-cm col-lg-9 mx-auto d-block mb-3">
                                    
                                       <div className="comon-opcity-div">

                                           <div className="comon-pricing-div">
                                                   <h3>Gen 3</h3>

                                                   <div className="d-flex align-items-center mb-2">
                                                       <h5 className="m-0"> Max. Allowed Registration </h5>
                                                       <p className="m-0  ms-3">
                                                       <span className="y-color">1000  </span> 
                                                        <NavLink to="/" className="text-white  ms-3">
                                                            <BiEditAlt/>
                                                        </NavLink>
                                                       </p>
                                                   </div>
                                                   <div className="form-group">
                                                        <div className="d-flex justify-content-between">
                                                            
                                                         <div className="comonmulti-div">
                                                               <MultiDivnext/>

                                                         </div>

                                                        

                                                           <div className="gp-btuuon-div">
                                                               <button type="button" className="btn" onClick={()=> setHideSelectNext(false)}>
                                                                    delete all
                                                               </button>
                                                               <button type="button" className="btn">
                                                                    delete selected
                                                               </button>
                                                           </div>
                                                        </div>
                                                   </div>

                                                   { hideselectnext?
                                                    <div className="manin-select-div mb-4 d-flex align-items-center">
                                                      
                                                        {!hidden4 && <button className="btn com-btn-sel" onClick={() => setHiddeno5(true)}>
                                                            Ox-Option 1 <BsX/>
                                                        </button>}

                                                        {!hidden5 && <button className="btn com-btn-sel" onClick={() => setHiddeno6(true)}>
                                                            Ox-Option 2 <BsX/>
                                                        </button>}


                                                        {!hidden6 && <button className="btn com-btn-sel" onClick={() => setHiddeno7(true)}>
                                                            Ox-Option 3 <BsX/>
                                                        </button>}


                                                        {!hidden7 && <button className="btn com-btn-sel" onClick={() => setHiddeno8(true)}>
                                                            Ox-Option 4 <BsX/>
                                                        </button>}

                                                      
                                                        
                                                    </div>:null
                                                   }
                                                   
                                                   <div className="form-group">
                                                        <div className="d-flex justify-content-between">
                                                             <label>Add addresses to the allowlist</label>
                                                             <button type="button" className="btn bulk-btnup y-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                bulk Upload
                                                             </button>
                                                        </div>
                                                        

                                                         <input type="text" className="form-control"
                                                         name="walletnext"
                                                         id="validation"
                                                         required
                                                         minLength="3"
                                                         maxLength="50"
                                                         />

                                                   </div>
                                                   <div className="form-group mt-4">
                                                       <label> Price </label>
                                                       <div className="inpy-div d-flex align-items-center">
                                                               <input type="text" className="form-control" required/>
                                                               <div className="slp">
                                                                   <select class="form-select" aria-label="Default select example">
                                                                           <option selected>ETH</option>
                                                                           <option value="1">One</option>
                                                                           <option value="2">Two</option>
                                                                           <option value="3">Three</option>
                                                                       </select>
                                                               </div>
                                                       </div>
                                                   </div>

                                                   <div className="row row-cols-1 row-cols-lg-2">
                                                       <div className="col">
                                                           <div className="form-group">
                                                               <label> Limit Per Wallet </label>

                                                               <input type="text" className="form-control"
                                                               name="walletnext"
                                                               id="validation"
                                                               required
                                                               minLength="3"
                                                               maxLength="50"
                                                               />

                                                           </div>
                                                       </div>
                                                       <div className="col">
                                                           <div className="form-group">
                                                               <label> Max Allocated Supply </label>

                                                               <input type="text" className="form-control"
                                                               name="supplynext"
                                                               id="validation"
                                                               required
                                                               minLength="3"
                                                               maxLength="50"
                                                               />

                                                           </div>
                                                       </div>
                                                   </div>
                                           
                                           </div>
                                           
                                       </div>
                                       </div>

                                       <div className="inside-div-cm col-lg-9 mx-auto d-block mt-3">
                                            <div className="d-md-flex align-items-center justify-content-between">
                                                    <div className="next-div">
                                                        
                                                    </div>
                                                    <div className="right-pre-div d-flex align-items-center justify-content-between">
                                                    
                                                        <button type='submit' className="btn next-btn" onClick={notify}>Save <span> <BsArrowRight/> </span></button>
                                                    </div>
                                            </div>
                                        </div>
                                       
                                  </ValidForm>
                            </div>
                        </div>

              </div>

            </div>

        </div>


        <div className="content">
        <div className="modal fade upload-md" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modalblur">
              
              <div className="modal-body">
                  <BlukModal/>
                  <button type="button" className="btn next-btn ms-auto mt-3" data-bs-dismiss="modal">
                    Upload
                   <span> <BsArrowRight/> </span>
                  </button>
              </div>
              
            </div>
          </div>
        </div>
        </div>
        </>
    )
};
export default ManageAllowlist;