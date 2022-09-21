import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const getDimension = async (file) => {
  let reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    reader.onload = () => {
      var image = new Image();
      image.src = reader.result;
      image.onload = function () {
        resolve({ width: this.width, height: this.height });
      };
    };
    reader.readAsDataURL(file);
  });
};

const OnlyForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log("form data::", data);
    return (
         <>
           <div className="container">
           <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('firstName')} />
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
           </div>
         </>
    )
  };
export default OnlyForm;