import React,{useState} from "react";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const ProjectIcon=()=>{
    const [file, setIconFile] = useState("");

    const [filechange, fileUpload]= useState("Project Icon (500x500)");

    function handleIconUpload(event) {
        setIconFile(event.target.files["0"]);
        fileUpload(event.target.value)
    }

    return(
        <>
        <div className="box">
            <input type="file" name="iconFile" id="file-1" className="inputfile inputfile-1" 
            onChange={handleIconUpload} />
            <label for="file-1">
             <span> {filechange} </span></label>
            <BiUpload/>
        </div>
        </>
    )
};
export default ProjectIcon;