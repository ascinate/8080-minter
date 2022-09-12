import React, { useState } from "react";


function ButtonFs(){

    const [btnState, setBtnState] = useState(false);

    function handleclick(){
        setBtnState( btnState => !btnState);
    }

    let toggoleClassAdd = btnState ? 'newshow': '';

    return(
        <>
         <button className="btn btn-danger" onClick={handleclick}>
            Change Name
         </button>
        </>
    )
};
export default ButtonFs;