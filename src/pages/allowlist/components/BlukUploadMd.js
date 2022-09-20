import React, {useState} from "react";
import { BiUpload, BiPlus } from "react-icons/bi";

function BlukUploadMd(){

    const [fileBack, setBackFile] = useState("");

    const [fileChangeBack, handleBack]= useState("Background image (1920 x1080)");

    function handleBackUpload(event) {
      setBackFile(event.target.files[0]);
      handleBack(event.target.value)
 
    }

    return(

        <>
         <div className="main-moal-div">
              <h5> Bulk Upload </h5>
              <p> Upload multiple wallet address at once </p>
              <div className="form-group">
                    <div className="box">
                        <input type="file" name="iconFile" className="inputfile inputfile-1" 
                        onChange={handleBackUpload}  />
                        <label for="file-1">
                        <span> {fileChangeBack} </span></label>
                        <BiUpload/>
                    </div>
              </div>
         </div>
        </>
    )
};
export default BlukUploadMd;