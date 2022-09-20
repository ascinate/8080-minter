import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import MultipleValueTextInput from 'react-multivalue-text-input';
import { BsArrowRight, BsX } from "react-icons/bs";

function UploadAllowlist(){

    const [disabled, setDisabled] = useState("false");
    
    const [isActivediv, setActiveDiv] = useState("false");

    const [upOption, setUpOtption] = useState (["Ox Otion1", "OX Option2", "OX Option3",]);

    const [discordOption, setdiscordOtption] = useState (["Discord 1", "Discord 2", "Discord 3",]);

    const [twitterdOption, settwitterdOtption] = useState (["Twitter 1", "Twitter 2", "Twitter 3",]);


    const handleToggleRegister = () => {
        setActiveDiv(!isActivediv);
        setDisabled(!disabled);
    };
   

    return(
        <>
            <div className={isActivediv ? "show-main-register-allowlist" : null}>
              <div className="allow-register">
                    <div className="d-md-flex my-5 mb-lg-0 align-items-center justify-content-between">
                        <button className="btn tog-btn p-0" onClick={handleToggleRegister}>
                            <div className="d-flex align-items-center">
                                <span className="pb1">Allowlist Registration</span>
                                <div className="toggle-bn"></div>
                            </div>
                        </button>

                        <div className="form-group right-disable-div d-md-flex align-items-center justify-content-between">
                             <p> Max Allowed Registrations </p>
                             <input type="text" className="form-control"
                             disabled={disabled}/>
                        </div>
                        
                        
                    </div>

                    <div className="comon-input-div">
                       <div className="d-flex align-items-center justify-content-between">
                           <h5> Upload Allowlist </h5>
                           <div className="list-btn-div1">
                               <ul className="list-unstyled">
                                  <li>
                                     <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Bulk Upload
                                     </button>
                                  </li>
                                  <li>
                                     <NavLink to="/">
                                       Manage
                                     </NavLink>
                                  </li>
                               </ul>
                           </div>
                       </div>
                       <div className="from-group full-sel sp-value">
                     
                           <MultipleValueTextInput
                                onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
                                onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
                            
                                name="item-input"
                               
                            />

                       </div>
                    </div>

                    <div className="comon-input-div">
                       <h5> Discord Role </h5>
                       <div className="from-group">
                           <label> Must Have role </label>
                           <div className="comon-multi sp-value">
                                <MultipleValueTextInput
                                    onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
                                    onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
                                
                                    name="item-input"
                                    
                                />
                           </div>
                       </div>
                    </div>

                    <div className="comon-input-div">
                       <h5> Twitter Activity </h5>
                       <div className="from-group">
                           <label> Must follow account(s) </label>
                           <div className="comon-multi sp-value">
                                <MultipleValueTextInput
                                    onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
                                    onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
                                
                                    name="item-input"
                                    
                                />
                           </div>
                       </div>
                    </div>

                    <div className="comon-input-div">
                       <h5> Wallet Balance </h5>
                       <div className="from-group">
                           <label> Must at least </label>
                           <div className="inpy-div d-flex align-items-center">
                                <input type="text" className="form-control" placeholder="0.5 ETH" required/>
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
                    </div>

               </div>
            </div>




        </>
    )
};
export default UploadAllowlist;