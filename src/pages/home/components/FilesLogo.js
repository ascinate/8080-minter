import React,{useState} from "react";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const FilesLogo=()=>{
    const [file, setFile] = useState("");

     const [fileChangeLogo, handleLogo]= useState("Project Logo (png)");

    

    function handleUpload(event) {
      setFile(event.target.files[0]);
      handleLogo(event.target.value);
      if(this.files[0].size > 2097) {
        alert("File is too big!");
        this.value = "";
     };
    
  
       
    }

    


    return(
        <>
        <div className="box">
            <input type="file" name="iconFile" id="file-1" className="inputfile inputfile-1" 
            onChange={handleUpload}  accept="image/png" />
            <label for="file-1">
             <span> {fileChangeLogo} </span></label>
            <BiUpload/>

          


        </div>
        </>
    )
};
export default FilesLogo;