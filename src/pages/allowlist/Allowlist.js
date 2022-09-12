import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight,BsX } from "react-icons/bs";
import $ from "jquery";



function Allowlist(){
    
    document.title = "Free Mint - Allowlist"

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };


    return(
        <>
           <div className="comon-all-body hmepage-1 float-start w-100 mt-3">
              <div className={isActive ? "show-main" : null}>
                <div className="comon-div">
                  <div className="container">
                        <h1 className="main-haeding text-center text-white"> Launch Mint </h1>
                        <p className="col-lg-9 d-block mx-auto text-center text-white"> Launch a mint dApp with a custom sale flow below. You can choose from over 
                        10 EVM-compatible chains. </p>
                        <div className="link-gopage mt-5">
                            <ul className="list-unstyled d-md-flex justify-content-center align-items-center">
                                <li>
                                    <NavLink to="/">
                                        <div className="comon-btn-nomber text-center d-table">
                                            <span className="count-div">1</span>
                                            <h5> Basic Config </h5>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="active">
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
                                        <h3> Allowlist Registration   </h3>
                                        <p> Specify total supply, owner reserves and the mint limit per wallet. </p>
                                        <div className="comon-opcity-div">
                                            <div className="row align-items-center">

                                                <div className="col-lg-6">
                                                   <h5 className="text-white"> Allowlist Registration Link </h5>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group d-flex align-items-center mb-0">
                                                       
                                                       <input type="text" className="form-control" placeholder="0xymintregistration" required/>
                                                       <span> .8080.tools </span>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="inside-div-cm col-lg-9 mx-auto d-block mb-3">
                                        <div className="comon-opcity-div">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <a id="toogle-btn" className="tog-btn">
                                                   <div className="d-flex align-items-center">
                                                       <span className="pb">Public</span>
                                                       <div className="toggle-bn"></div>
                                                       <span className="pr"> Private </span>
                                                   </div>
                                                </a>

                                                <a id="close-btn" className="btn close-1">
                                                   <BsX/>
                                                </a>
                                            </div>

                                            <div className="form-group mt-5 col-lg-5">
                                                 <input type="text" className="form-control" placeholder="Group Name" required/>
                                                 
                                            </div>
                                            <p className="test-p col-lg-10"> Configure the criteria that a user must meet in order for them to be able to 
                                                 submit their address for this allowlist.</p>

                                            <div className="comon-input mt-5 col-lg-10">
                                               <h5> Twitter Activity </h5>
                                               <div className="form-group d-flex align-items-center ">
                                                   <label> 
                                                     Must follow account(s)
                                                   </label>
                                                   <div className="inpy-div">
                                                      <input type="text" className="form-control" required/>
                                                   </div>
                                               </div>
                                            </div>

                                            <div className="comon-input mt-3 col-lg-10">
                                               <h5> Wallet Balance </h5>
                                               <div className="form-group d-flex align-items-center ">
                                                   <label> 
                                                   Must have at least
                                                   </label>
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
                                            </div>

                                            
                                        </div>
                                    </div>

                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                        <button type="button" className="btn btn-opt-add mt-2">
                                                <BiPlus/>  Add Group
                                        </button>
                                    </div>

                                    <div className="inside-div-cm col-lg-9 mx-auto d-block">
                                        <div className="d-md-flex align-items-center justify-content-between">
                                                <div className="next-div">
                                                    
                                                </div>
                                                <div className="right-pre-div d-flex align-items-center justify-content-between">
                                                    <NavLink to="/" className="btn pre-btn"> Save </NavLink>
                                                    <NavLink to="/setpsn8" className="btn next-btn"> Next <span> <BsArrowRight/> </span> </NavLink>
                                                </div>
                                        </div>
                                    </div>




                                   
                                    




                                </form>
                            </div>
                        </div>
                  </div>
                </div>
              </div>  

              <button className="btn btn-danger" onClick={handleToggle}>
            Change Name
         </button>

           </div>
        </>
    )
};
export default Allowlist;