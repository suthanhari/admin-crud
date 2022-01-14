
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Products(){

  const [products,setProducts] = useState([])

  useEffect ( async () => {
    try {
     let products =  await fetch("https://619856c0164fa60017c23011.mockapi.io/products")
     let productsData = await products.json()
     setProducts(productsData)
    } catch (error) {
      console.log(error)
    }
  },[])

  let deleteUser = async (data)=>{
    try {
      await fetch(`https://619856c0164fa60017c23011.mockapi.io/products/${data}`,{
        method :"DELETE",
      })
      let products =  await fetch("https://619856c0164fa60017c23011.mockapi.io/products")
      let productsData = await products.json()
      setProducts(productsData)
    
     }
     catch (error) {
           console.log(error)
     }
   }
      
    return(
        <>
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Product List</h1>
                <Link to="CreateProduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create New Product</Link>
            </div>

            <div class="card text-center">
  <div class="card-header">
    Product Details
  </div>
  <div class="card-body">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">ProductName</th>
      <th scope="col">ProductPrice</th>
      <th scope="col">Available Stocks</th>
      <th scope="col">Product Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
     
     products.map((product,index) =>{
       return (
         <tr>
         <th scope="row">{index+1}</th>
         <td>{product.productName}</td>
         <td>{product.productPrice}</td>
         <td>{product.availableStocks}</td>
         <td>{product.productDescription}</td>
         <td>
           <Link to={`edit-product/${product.id}`}><button type="button" class="btn btn-primary btn-sm">Edit</button></Link>
           <button onClick={()=>{deleteUser(product.id)}} type="button" class="btn btn-danger btn-sm">Delete</button></td>
       </tr>
       )
     })
   }
  </tbody>
</table>
  </div>
  <div class="card-footer text-muted">
    End
  </div>
</div>
        </>
    )
}