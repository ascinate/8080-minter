import { useState, useEffect } from "react";
import ProjectIcon from "./ProjectIcon";
import Contract from "./Contract";
import LookFill from "./LookFill";
import Withdraal from "./Withdraal";
import CounnectdSocal from "./CounnectdSocal";
import CounntedDiscord from "./CounntedDiscord";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Exform=()=> {

    const initialValues = { projectname: "", projectsymbol:"", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.projectname) {
        errors.projectname = "Project Name is required!";
      }
      if (!values.projectsymbol) {
        errors.projectsymbol = "Project Symbol is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };

  return (
    <div className="container">
    

      <form onSubmit={handleSubmit}>
        

        <div className="inside-div-cm col-lg-9 mx-auto d-block">
            <h3>  Basic Info  </h3>
            <p> Let’s name your project! </p>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" name="projectname" className="form-control" 
                        placeholder="Project Name"
                        value={formValues.projectname}
                        onChange={handleChange} />
                        
                        <p>{formErrors.projectname}</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" name="projectsymbol" className="form-control"
                         placeholder="Project Symbol" 
                         value={formValues.projectsymbol}
                          onChange={handleChange}
                          />
                          <p>{formErrors.projectsymbol}</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        
                        <ProjectIcon/>
                        
                    </div>
                </div>
               
            </div>
        </div>

        <Contract/>

        <LookFill/>

        <div className="inside-div-cm col-lg-9 mx-auto d-block">
                <h3> Mint Configuration </h3>
                <p> Specify total supply, owner reserves and the mint limit per
                wallet. </p>
                <div className="comon-opcity-div">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label> Total Supply </label>
                                <input name="supply" type="text" className="form-control" 
                                value={formValues.supply}
                                 onChange={handleChange} />
                                 <p>{formErrors.supply}</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label> Owner Reserves </label>
                                <input name="owner" type="text" className="form-control" required/>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <div className="d-flex justify-content-between align-items-center">
                                <label> Metadata Base URI [Pre-Reveal] </label>
                                <span> Leave blank for mints with instant reveal.</span>
                                </div>
                                
                                <input type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label> Metadata Base URI [Post-Reveal] </label>
                                <input type="text" name="baseurl" className="form-control" required/>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
         </div>


         <Withdraal/>

         <CounnectdSocal/>

         <CounntedDiscord/>

         <div className="inside-div-cm col-lg-9 mx-auto d-block">
            <div className="d-md-flex align-items-center justify-content-between">
                    <div className="next-div">
                        <NavLink to="/" className="btn pre-btn"> Preview </NavLink>
                    </div>
                    <div className="right-pre-div d-flex align-items-center justify-content-between">
                        <input type="submit" className="btn " value="Save"/>
                        <button className="fluid ui pre-btn btn blue">Submit</button>
                        
                        <NavLink to="/allowlist" className="btn next-btn"> Next <span> <BsArrowRight/> </span> </NavLink>
                    </div>
            </div>
        </div>

      </form>
    </div>
  );
}

export default Exform;