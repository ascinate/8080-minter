import ProjectIcon from "./ProjectIcon";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const BasicInfo=()=>{


    const initialValues = { username: "", email: "", password: "" };
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
      if (!values.username) {
        errors.username = "Username is required!";
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

    return(
        <>
        
        <div className="inside-div-cm col-lg-9 mx-auto d-block">
            <h3>  Basic Info  </h3>
            <p> Let’s name your project! </p>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" name="projectname" className="form-control" 
                        placeholder="Project Name"
                        value={formValues.username}
                        onChange={handleChange} />
                        
                        <p>{formErrors.username}</p>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" name="projectsymbol" className="form-control"
                         placeholder="Project Symbol" 
                         value={formValues.projectsymbol}
                          onChange={handleChange}
                          />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        
                        <ProjectIcon/>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default BasicInfo;