import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight,BsX } from "react-icons/bs";
import ValidForm from 'react-valid-form-component';
import Header from "../../Header";




function Pricing(){
    
    document.title = "Free Mint - Pricing"

    const [isActive, setActive] = useState("false");

    const [pricename, setPriceName] = useState("");
    const [groupname, setGroupName] = useState("");
    const [walletname, setWalletName] = useState("");


    const [pricenamea, setPriceNameA] = useState("");
    const [groupnamea, setGroupNameA] = useState("");
    const [walletnamea, setWalletNameAA] = useState("");

    const [pricenameb, setPriceNameB] = useState("");
    const [groupnameb, setGroupNameB] = useState("");
    const [walletnameb, setWalletNameBB] = useState("");
    

    const handleToggle = () => {
      setActive(!isActive);
    };


    return(
        <>
           <Header/>
           <div className="comon-all-body hmepage-1 allowist-p1 float-start w-100 mt-3">
              <div className={isActive ? "show-main-up-allowlist" : null}>
                <div className="comon-div">
                  <div className="container">
                        <h1 className="main-haeding text-center text-white"> Launch Mint </h1>
                        <p className="col-lg-9 d-block mx-auto text-center text-white"> Launch a mint dApp with a custom sale flow below. You can choose from over 
                        10 EVM-compatible chains. </p>
                        <div className="link-gopage mt-5">
                            <ul className="list-unstyled d-flex justify-content-center align-items-center">
                                <li>
                                    
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">1</span>
                                            <h5> Basic Config </h5>
                                        </div>
                                   
                                </li>
                                <li >
                                    
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">2</span>
                                            <h5> Allowlists </h5>
                                        </div>
                                 
                                </li>
                                <li className="active">
                                    
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">3</span>
                                            <h5> Pricing </h5>
                                        </div>
                                    
                                </li>
                            </ul>
                        </div>
                        <div className="comon-from my-5">
                             <div className="blur"></div>
                        
                             <div className="main-forms">
                                <ValidForm>
                                   
                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                        <h3> Pricing   </h3>
                                        <p> Configure pricing across allowlists. </p>
                                        <div className="comon-opcity-div">

                                            <div className="comon-pricing-div">
                                                <h3>Gen 1</h3>
                                                <h5> Configure the pricing for this list. </h5>

                                                <div className="form-group mt-4">
                                                   <label> Price </label>
                                                   <div className="inpy-div d-flex align-items-center">
                                                            <input type="text" className="form-control" 
                                                            value={pricename}
                                                            onChange={(e) => setPriceName(e.target.value)}
                                                            />
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
                                                            value={walletname}
                                                            onChange={(e) => setWalletName(e.target.value)}
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
                                                            value={groupname}
                                                            onChange={(e) => setGroupName(e.target.value)}
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
                                                    <h5> Configure the pricing for this list. </h5>

                                                    <div className="form-group mt-4">
                                                        <label> Price </label>
                                                        <div className="inpy-div d-flex align-items-center">
                                                                <input type="text" className="form-control" 
                                                                value={pricenameb}
                                                                onChange={(e) => setPriceNameB(e.target.value)}/>
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
                                                                value={walletnameb}
                                                                onChange={(e) => setWalletNameB(e.target.value)}
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
                                                                value={groupnameb}
                                                                onChange={(e) => setGroupNameBB(e.target.value)}
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
                                                    <h5> Configure the pricing for this list. </h5>

                                                    <div className="form-group mt-4">
                                                        <label> Price </label>
                                                        <div className="inpy-div d-flex align-items-center">
                                                                <input type="text" className="form-control"
                                                                value={pricenamea}
                                                               onChange={(e) => setPriceNameA(e.target.value)}
                                                                />
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
                                                                name="walletnextone"
                                                                id="validation"
                                                                required
                                                                minLength="3"
                                                                maxLength="50"
                                                                value={walletnamea}
                                                                onChange={(e) => setWalletNameA(e.target.value)}
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <label> Max Allocated Supply </label>

                                                                <input type="text" className="form-control"
                                                                name="supplynexttwo"
                                                                id="validation"
                                                                required
                                                                minLength="3"
                                                                maxLength="50"
                                                                value={groupnamea}
                                                                onChange={(e) => setGroupNameAA(e.target.value)}
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                            
                                            </div>
                                            
                                        </div>
                                    </div>

                                    

                                    

                                 

                                   

                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                        <div className="d-md-flex align-items-center justify-content-between">
                                                <div className="next-div">
                                                    
                                                </div>
                                                <div className="right-pre-div d-flex align-items-center justify-content-between">
                                                    
                                                     <button type='submit' className="btn next-btn">Launch <span> <BsArrowRight/> </span></button>
                                                    
                                                </div>
                                        </div>
                                    </div>

                                    

                                </ValidForm>
                            </div>


                            
                        </div>

                        
                        
                      
                  </div>
                </div>
              </div>  


           </div>
        </>
    )
};
export default Pricing;
