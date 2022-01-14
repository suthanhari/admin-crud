import React from "react";
import { Formik, useFormik } from 'formik';


export default function Createuser(){

  const formik = useFormik({
    initialValues:{
      name:"",
      PhoneNumber:"",
      Email: "",
      Address : ""
    },
    onSubmit : async values => {
       try {
        await fetch("https://619856c0164fa60017c23011.mockapi.io/students",{
          method :"POST",
          body : await JSON.stringify(values),
          headers :{
            "Content-type" : "application/json"
          }
        })
        alert("Data saved")
       }
       catch (error) {
             console.log(error)
       }
     
    }
  })
    return (
        <>
        <h3>Create User</h3>
         <form onSubmit={formik.handleSubmit}>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Name</label>
      <input type="text" class="form-control" id="validationCustom01" name="name" placeholder="name" onChange={formik.handleChange} value={formik.values.name} />
      
    </div><br/>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Phone Number</label>
      <input type="number" class="form-control" id="validationCustom02" name="PhoneNumber" placeholder="Phone number" value={formik.values.PhoneNumber} onChange={formik.handleChange}/>
      
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Email</label>
      <input type="email" class="form-control" id="validationCustom03" name="Email" placeholder="Email" value={formik.values.Email} onChange={formik.handleChange}/>
      
    </div>

  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Address</label>
      <input type="text" class="form-control" id="validationCustom03" name="Address" placeholder="Address" value={formik.values.Address} onChange={formik.handleChange}/>
   
    </div>
  
   
  </div>

  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
        </>
    )
}