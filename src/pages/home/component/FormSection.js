import React, { useState, useEffect } from "react";
import BasicInfo from "./BasicInfo";
import FilesLogo from "./FilesLogo";
import Contract from "./Contract";
import LookFill from "./LookFill";
import MintConfigure from "./MintConfigure";
import Withdraal from "./Withdraal";
import CounnectdSocal from "./CounnectdSocal";
import CounntedDiscord from "./CounntedDiscord";
import { NavLink } from "react-router-dom";
import { BiUpload, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";


const FormSection=()=>{

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
        <form onSubmit={handleSubmit}>

                <BasicInfo/>

                <Contract/>

                <LookFill/>

                <MintConfigure/>


                <Withdraal/>

                <CounnectdSocal/>

                <CounntedDiscord/>

                <div className="inside-div-cm col-lg-9 mx-auto d-block">
                    <div className="d-md-flex align-items-center justify-content-between">
                            <div className="next-div">
                                <NavLink to="/" className="btn pre-btn"> Preview </NavLink>
                            </div>
                            <div className="right-pre-div d-flex align-items-center justify-content-between">
                                <input type="submit" className="btn pre-btn" value="Save"/>
                                
                                <NavLink to="/allowlist" className="btn next-btn"> Next <span> <BsArrowRight/> </span> </NavLink>
                            </div>
                    </div>
                </div>

            </form>
        </>
    )
};
export default FormSection;