import React, {useState} from "react";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

function BackgroundImg(){
    const [fileBack, setBackFile] = useState("");

    const [fileChangeBack, handleBack]= useState("Background image (1920 x1080)");

    function handleBackUpload(event) {
      setBackFile(event.target.files[0]);
      handleBack(event.target.value)
 
    }

    return(
        <>
      

        <div className="box">
            <input type="file" name="iconFile" className="inputfile inputfile-1" 
            onChange={handleBackUpload}  />
            <label for="file-1">
             <span> {fileChangeBack} </span></label>
            <BiUpload/>
        </div>
        </>
    )
};
export default BackgroundImg;