import React from "react";

function CounntedDiscord(){

    return(
        <>
        <div className="inside-div-cm col-lg-9 mx-auto d-block">
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                    <div className="socal-div1">
                        <figure>
                        <img src="images/icon1.png" alt="icon2"/>
                        </figure>

                        <button type="button" className="btn comon-count1">
                            Connect Discord
                        </button>
                    </div>
                </div>

                <div className="col">
                    <div className="socal-div1">
                        <figure>
                        <img src="images/icons8-twitter.png" alt="icon2"/>
                        </figure>

                        <button type="button" className="btn comon-count1">
                            Connect Discord
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default CounntedDiscord;