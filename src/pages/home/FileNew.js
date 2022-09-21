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



            var _URL = window.URL || window.webkitURL;
            $("#input").change(function (e) {
                var file, img;
                if ((file = this.files[0])) {
                    img = new Image();
                    img.onload = function () {
                    var width=this.width;
                     var height=this.height;
                      $("#width").html(width);
                      $("#height").html(height);
                     if(width > 745 || height > 536)
                     {
                       alert("Width and heigth should not be more than 745px -536px ");
                     }                          
                    };
                    img.src = _URL.createObjectURL(file);
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
          
          <output id="output" className="text-white"></output>
          </>
      );
    }
  }

export default FileNew;