import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import ValidForm from 'react-valid-form-component';
import Multiselect from 'multiselect-react-dropdown';
import { BiEditAlt } from "react-icons/bi";
import BlukModal from "./components/BlukModal";


import Header from "../../Header";


const ManageAllowlist=()=>{
    document.title ="8080 Mint - Manage Allowlist"

   const handleChange = selectedOption => {
      this.setState({ selectedOption });
    };

    
   
    const [upOption, setUpOtption] = useState (["Ox Otion1", "OX Option2", "OX Option3",]);
    return(
        <>
        <Header/>
        <div className="comon-all-body hmepage-1 float-start w-100 mt-3">

            <div className="comon-div">
              <div className="container">
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
                                                    <h3>Gen 1</h3>

                                                    <div className="form-group mt-4">
                                                      <div className="d-flex justify-content-between">
                                                            <label> Price </label>
                                                            <button type="button" className="btn publick-btn" disabled>
                                                               Public Mint
                                                            </button>
                                                      </div>
                                                      
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
                                                                 
                                                              <div className="comonmulti-div">
                                                                    <Multiselect
                                                                    isObject={false}
                                                                    options={upOption}
                                                                    placeholder="Search wallet address"
                                                                    displayValue="key"
                                                                    selectedValues={{upOption}}
                                                                    onChange={(e) => setUpOtption(e.target.value)}
                                                                    value={upOption}
                                                                    emptyRecordMsg={"Maximum nominees selected !"}
                                                                    />
                                                                    {upOption}

                                                              </div>

                                                                <div className="gp-btuuon-div">
                                                                    <button type="button" className="btn">
                                                                         delete all
                                                                    </button>
                                                                    <button type="button" className="btn">
                                                                         delete selected
                                                                    </button>
                                                                </div>
                                                             </div>
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
                                                               <Multiselect
                                                               isObject={false}
                                                               options={upOption}
                                                               placeholder="Search wallet address"
                                                               displayValue="key"
                                                               selectedValues={{upOption}}
                                                               />

                                                         </div>

                                                           <div className="gp-btuuon-div">
                                                               <button type="button" className="btn">
                                                                    delete all
                                                               </button>
                                                               <button type="button" className="btn">
                                                                    delete selected
                                                               </button>
                                                           </div>
                                                        </div>
                                                   </div>
                                                   
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
                                                    
                                                        <button type='submit' className="btn next-btn">Save <span> <BsArrowRight/> </span></button>
                                                    </div>
                                            </div>
                                        </div>
                                       
                                  </ValidForm>
                            </div>
                        </div>

              </div>

            </div>

        </div>


        <div className="modal fade upload-md" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              
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
        </>
    )
};
export default ManageAllowlist;