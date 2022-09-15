import React from "react";
import RegisterTop from "../../RegisterTop";
import TopReBody from "./components/TopReBody";
import ListRegister from "./components/ListRegister";

function Register(){
    document.title ="8080 Mint - Register";
    return(
        <>
          <RegisterTop/>
          
          <div className="comon-all-body register-page float-start w-100 mt-3">
                
                <div className="comon-div">
                  <div className="container">
                        <h1 className="main-haeding text-center text-white"> Registration </h1>
                        
                        <TopReBody/>

                        <div className="comon-from my-5">
                             <div className="blur"></div>
                        
                             <div className="main-forms">
                                <ListRegister/>
                            </div>
                        </div>
                  </div>
                </div>
           </div>
        </>
    )
};
export default Register;