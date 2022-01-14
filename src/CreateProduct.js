import React  from "react";
import { Formik, useFormik } from 'formik';

export default function CreateProduct(){
  const formik = useFormik({
    initialValues:{
      productName:"",
      productPrice:"",
      availableStocks: "",
      productDescription : ""
    },
    onSubmit : async values => {
       try {
        await fetch("https://619856c0164fa60017c23011.mockapi.io/products",{
          method :"POST",
          body : await JSON.stringify(values),
          headers :{
            "Content-type" : "application/json"
          }
        })
        alert("data saved")
       }
       catch (error) {
             console.log(error)
       }
     
    }
  })
    return (
        <>
        <h3>Create Product</h3>
         <form onSubmit={formik.handleSubmit}>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Product Name</label>
      <input type="text" class="form-control" id="validationCustom01" name="productName" placeholder="product Name" onChange={formik.handleChange} value={formik.values.productName} />
      
    </div><br/>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Product Price</label>
      <input type="number" class="form-control" id="validationCustom02" name="productPrice" placeholder="productPrice" value={formik.values.productPrice} onChange={formik.handleChange}/>
      
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Available Stocks</label>
      <input type="number" class="form-control" id="validationCustom03" name="availableStocks" placeholder="Available Stocks" value={formik.values.availableStocks} onChange={formik.handleChange}/>
      
    </div>

  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Product Description</label>
      <input type="text" class="form-control" id="validationCustom03" name="productDescription" placeholder="Product Description" value={formik.values.productDescription} onChange={formik.handleChange}/>
   
    </div>
  
   
  </div>

  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
        </>
    )

}