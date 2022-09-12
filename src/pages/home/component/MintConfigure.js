import React from "react";

const MintConfigure=()=>{

    return(
        <>
        <div className="inside-div-cm col-lg-9 mx-auto d-block">
                <h3> Mint Configuration </h3>
                <p> Specify total supply, owner reserves and the mint limit per
                wallet. </p>
                <div className="comon-opcity-div">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label> Total Supply </label>
                                <input name="supply" type="text" className="form-control" required/>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label> Owner Reserves </label>
                                <input name="owner" type="text" className="form-control" required/>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <div className="d-flex justify-content-between align-items-center">
                                <label> Metadata Base URI [Pre-Reveal] </label>
                                <span> Leave blank for mints with instant reveal.</span>
                                </div>
                                
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label> Metadata Base URI [Post-Reveal] </label>
                                <input type="text" name="baseurl" className="form-control" required/>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
         </div>
        </>
    )
};
export default MintConfigure;