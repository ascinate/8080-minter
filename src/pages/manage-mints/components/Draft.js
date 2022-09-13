import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import AllDraft from "./DraftApi";

const Draft=()=>{
    const [ workData , setworkData] =useState(AllDraft);
    console.log(workData);

    return(

        <>

        {
            workData.map((curElem) =>{
                const { id, titel, time, link, progess} = curElem;
                return(
                    <>
                   
                    <div className="comon-draft-div-main pt-5">
                        <div className="comon-items-draft">
                                <div className="d-lg-flex align-items-center justify-content-between">
                                    <h2 className="dft-titel"> {titel} <span> DRAFT </span> </h2>
                                    <span className="right-cm-df">Draft, last edited on {time} </span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                            <div className="pogress-div">
                                                <div className="dft-top">
                                                    <h5>Progress </h5>
                                                </div>
                                                <div className="dft-ps">
                                                    <div className="prog-div">
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{width:"50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            
                                                        </div>
                                                        <span className="d-block text-center"> {progess} </span>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-4">
                                            <div className="pogress-div">
                                                    <div className="dft-top">
                                                        <h5> Actions </h5>
                                                    </div>
                                                    <div className="dft-ps">
                                                        <NavLink to={link} className="complte-lc"> COMPLETE & LAUNCH </NavLink>
                                                    </div>
                                            </div>
                                    </div>
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
export default Draft;