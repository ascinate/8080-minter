import React from "react";
import $ from "jquery";
import { BiUpload, BiPlus } from "react-icons/bi";

class FileNew extends React.Component {

    componentWillMount(){
 


		$(document).ready(function(){
            const allowedFileTypes = ["image/png"];

            const input = document.getElementById("input");
            const output = document.getElementById("output");
            const section = document.getElementById("outputname");
            
            input.addEventListener("change", (event) => {
              const files = event.target.files;
            
              if (files.length === 0) {
                output.innerText = "Choose image files…";
                return;
              }

              if (files.length === 0) {
                section.innerText = "Choose image files…";
                return;
              }
            
              const allAllowed = Array.from(files).every((file) =>
                allowedFileTypes.includes(file.type)
              );
              
              output.innerText = allAllowed
                ? ""
                : "Please choose Only PNG files image.";

                for (const file of event.target.files) {
                    section.innerText = `${file.name} \n`;
                    
                  }
            });



         

           
		});


        
      }
    render() {
      return (
          <>
          <div className="box">
              <section id="outputname">Project Logo (png)</section>
              <input type="file" id="input" className="inputfile inputfile-1"
              />
              <BiUpload/>
                
          </div>
          <div id="error" className="red-color"></div>
          <output id="output" className="red-color"></output>
          </>
      );
    }
  }

export default FileNew;