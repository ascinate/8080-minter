import React  from "react";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import $ from "jquery";

class BackgroundImg extends React.Component {

  constructor(props) {
    super(props);
   this.state = {name: "Background Image (1920 x 1080 )"}

  }
   changeTitle = (e) =>{
      this.setState({name: e.target.value});
    }
    componentWillMount(){
 
    

		$(document).ready(function(){
      var _URL = window.URL || window.webkitURL;
      $("#bigimg").change(function (e) {
          var file, img;
          if ((file = this.files[0])) {
              img = new Image();
              img.onload = function () {
              var width=this.width;
               var height=this.height;
                $("#width").html(width);
                $("#height").html(height);
               if(width > 1920 || height > 1080)
               {
                document.getElementById("errormn").innerHTML = "Image should be (1920px X 1080px) ";
               }  
               if(width < 1920 || height < 1080)
                     {
                      document.getElementById("errormn").innerHTML = "Image should be (1920px X 1080px) ";
                }                           
              };
              img.src = _URL.createObjectURL(file);
          }

          var ext = $('#bigimg').val().split('.').pop().toLowerCase();
          if($.inArray(ext, ['png']) == -1) {
            document.getElementById("bigimgnameerror").innerHTML = "Please choose Only PNG files image.";
          }
         });
     



      

           
		});

   
        
      }
    render() {
      return (
          <>
          <div className="box">
              <section id="titelname">{this.state.name}</section>
              <input type="file" id="bigimg" className="inputfile inputfile-1"
              onChange={this.changeTitle}
              />
              <BiUpload/>
                
          </div>
          <div id="errormn" className="red-color"></div>
          <div id="bigimgnameerror" className="red-color"></div>
          </>
      );
    }
  }

export default BackgroundImg;