import React,{useState} from "react";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Withdraal=()=>{

    const handleclickhow = () => {
        setActive(!isActive);
      };

      const [isActive, setActive] = useState("false");

    return(
        <>
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

                <div className={isActive ? "show-main-div" : null}>
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
            </div>

            <button type="button" className="btn btn-opt-add" onClick={handleclickhow}>
                <BiPlus/> Add Wallet
            </button>
        </div>
        </>
    )
};
export default Withdraal;