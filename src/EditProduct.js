
import Products from "./Products";
import React, { useEffect } from "react";
import { Formik, useFormik } from 'formik';
import { useParams } from "react-router-dom";


export default function EditProduct(){

    
    let params = useParams()


    useEffect(async () => {

        try {
           let products = await fetch(`https://619856c0164fa60017c23011.mockapi.io/products/${params.id}`)
           let productsData = await products.json()
           formik.setValues(productsData)
        
        }
        catch(error){
            console.log(error)
        }
            

    },[])

  const formik = useFormik({
    initialValues:{
        productName:"",
        productPrice:"",
        availableStocks: "",
        productDescription : ""
      },
    onSubmit : async values => {
       try {
        await fetch(`https://619856c0164fa60017c23011.mockapi.io/products/${params.id}`,{
          method :"PUT",
          body : await JSON.stringify(values),
          headers :{
            "Content-type" : "application/json"
          }
        })
        alert("Data Updated")
       }
       catch (error) {
             console.log(error)
       }
     
    }
  })
    return(
        <>
        <h3>Edit Product</h3>
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