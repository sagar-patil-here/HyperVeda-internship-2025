import React from "react";
import { useForm } from 'react-hook-form';
import "./App.css";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function after_submit(data){
    alert("Form Submitted Successfully")
    console.log(data)


  }



  return (
    <form onSubmit={handleSubmit(after_submit)}>
      <h1>Reg Form</h1>
      <label>First Name</label>
      <input type="text" {...register('firstName', { required: "First name is required", minLength: { value:3, message:"min length 3"} })} />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <br />
      <br />
      <label>Middle Name</label>
      <input type="text" {...register('middleName', { required: "middle name is required" })} />
      {errors.middleName && <p>{errors.middleName.message}</p>}
      <br />
      <br />
      <label>Lastt Name</label>
      <input type="text"  {...register('lastName', { required: "Last name is required" })}/>
      {errors.LastName && <p>{errors.lastName.message}</p>}

      <br />
     Email <input {...register("email", { 
  required: "Email is required", 
  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } 
 
})} />
 {errors.email && <p>{errors.email.message}</p>}
      <br />
      
      <input type="submit" value="Submit" />
    </form>
  );
};

export default App;
