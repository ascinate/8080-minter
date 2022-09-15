import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight, BsChevronLeft } from "react-icons/bs";
import SubHeader from "../../SubHeader";


const Connect=()=>{
    document.title ="8080 Mint - Connect Walllet";
    

    return(
        
        <>
           <SubHeader/>

           <div className="comon-all-body hmepage-1 float-start w-100 mt-3">
              
                
                <div className="comon-div">
                  <div className="container">
                        <h1 className="main-haeding new-fc text-center text-white"> Unf<sub>*</sub>ck Your
                          <span className="d-block">Drops</span>
                        </h1>
                        
                        <div className="wallte-features">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-5 g-lg-5 my-5">
                                 <div className="col">
                                   <NavLink to="/connectwalllet">
                                        <div className="items-wallter text-center">
                                            <figure>
                                               <img src="images/ic1.png" alt="icon"/>
                                            </figure>
                                            <p> Use 8080 to launch staking, takens and marketplaces for
                                            your NFT projects. Zero code, no compromises.</p>
                                        </div>
                                    </NavLink>
                                 </div>

                                 <div className="col">
                                 <NavLink to="/connectwalllet">
                                    <div className="items-wallter text-center">
                                        <figure>
                                            <img src="images/ic2.png" alt="icon"/>
                                        </figure>
                                        <p> Staking and marketplaces launched via 8080 are state-of-the-art,
                                         gas-free and completely exploit free.</p>
                                    </div>
                                 </NavLink>
                                 </div>

                                 <div className="col">
                                  <NavLink to="/connectwalllet">
                                    <div className="items-wallter text-center">
                                        <figure>
                                            <img src="images/ic3.png" alt="icon"/>
                                        </figure>
                                        <p> Manage collabs with partner projects using taken groups.
                                        Allow their communities to participate in your staking.</p>
                                    </div>
                                  </NavLink>
                                 </div>

                                 <div className="col">
                                  <NavLink to="/connectwalllet">
                                    <div className="items-wallter text-center">
                                        <figure>
                                            <img src="images/icon3.png" alt="icon"/>
                                        </figure>
                                        <p> Make flawless drops in <BsChevronLeft/>10 mins at a fraction of the cost. 
                                        give your project the drop it deserves.</p>
                                    </div>
                                  </NavLink>
                                 </div>

                                 
                            </div>
                        </div>
                  </div>
                </div>
           </div>
        </>
    )
};
export default Connect;
