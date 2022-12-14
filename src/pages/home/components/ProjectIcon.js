import React,{useState} from "react";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import $ from "jquery";


class ProjectIcon extends React.Component {

  constructor(props) {
    super(props);
   this.state = {name: "Project Icon (500x500)"}

  }
   changeTitle = (e) =>{
      this.setState({name: e.target.value});
    }

  componentWillMount(){
 


		$(document).ready(function(){
      
      var _URL = window.URL || window.webkitURL;
      $("#inputnew").change(function (e) {
          var file, img;
          if ((file = this.files[0])) {
              img = new Image();
              img.onload = function () {
              var width=this.width;
               var height=this.height;
                $("#width").html(width);
                $("#height").html(height);
               if(width > 500 || height > 500)
               {
                document.getElementById("errorn").innerHTML = "Image should be (500px X 500px) ";
               }  
               if(width < 500 || height < 500)
                     {
                      document.getElementById("errorn").innerHTML = "Image should be (500px X 500px) ";
                }                           
              };
              img.src = _URL.createObjectURL(file);
          }


          var ext = $('#inputnew').val().split('.').pop().toLowerCase();
          if($.inArray(ext, ['png']) == -1) {
            document.getElementById("erromdiv").innerHTML = "Please choose Only PNG files image.";
          }
      });



      

           
		});


        
      }
    render() {
      
      return (
          <>
          <div className="box">
              <sectionn id="outputnamen">{this.state.name}</sectionn>
              <input type="file" id="inputnew" className="inputfile inputfile-1"
              onChange={this.changeTitle}
              />
              <BiUpload/>
                
          </div>
          <div id="errorn" className="red-color"></div>
          <div id="erromdiv" className="red-color"></div>
          </>
      );
    }
  }

export default ProjectIcon;