import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaWallet } from "react-icons/fa";
import { BsXCircleFill, BsArrowRight } from "react-icons/bs";
import ListNewdata from "./ListRegisterApi";

import { Checkbox } from 'pretty-checkbox-react';



function ListRegister(){
    const [ workData , setworkData] =useState(ListNewdata);
    console.log(workData);


    const ref = React.useRef(null);

    React.useEffect(() => {
        if (ref.current) {
        }
    }, []);
 

    return(
        <>
       

        {
            workData.map((curElem) =>{
                const { id, titel, link, walletlink ,discordl, aplictionno, submitno} = curElem;
                return(
                    <>
                   
                    <div className="comon-list-re-div">
                            <h2 className="text-white"> {titel} </h2>
                            <div className="row row-cols-1 row-cols-lg-2">
                                    <div className="col">
                                        <div className="comon-divb">
                                            <h2 className="text-white"> Qualification Criteria </h2>
        
                                            <div className="form-check">
                                                <Checkbox ref={ref}>
                                                    Must follow <span> @account </span>  on twitter
                                                </Checkbox>

                                            </div>
        
                                            <div className="form-check">
                                                <Checkbox ref={ref}>
                                                    Must have <span> 0.5ETH </span>  in walllet
                                                </Checkbox>
                                               
                                            </div>
        
                                            <div className="form-check">
                                                <Checkbox ref={ref}>
                                                     Must have <span> @everyone </span>  role in discord
                                                </Checkbox>
                                               
                                            </div>
        
                                            
        
                                        </div>
                                    </div>
        
                                    <div className="col">
                                    <div className="right-section-1">
                                        <div className="row row-cols-2 row-cols-lg-2">
                                            <div className="col">
                                                <div className="comon-nu-count  text-center">
                                                    <h5> Total number 
                                                    <br/> of applications </h5>
                                                    <h3> {aplictionno}</h3>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="comon-nu-count  text-center">
                                                    <h5> Applications 
                                                    <br/> submitted </h5>
                                                    <h3> {submitno} </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                        <NavLink to={link} className="btn connect-bnt ms-lg-auto d-table mt-3">
                                            Register  <BsArrowRight/>                  
                                        </NavLink>
        
                                    </div>
                            </div>
                    </div>
                    </>
                );
            })
        }

            
        </>
    )
};
export default ListRegister;