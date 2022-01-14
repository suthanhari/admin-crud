import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


export default function Userlist() {
       const [users,setUsers] = useState([])
      
     useEffect ( async () => {
       try {
        let students =  await fetch("https://619856c0164fa60017c23011.mockapi.io/students")
        let studentsData = await students.json()
        setUsers(studentsData)
       } catch (error) {
         console.log(error)
       }
     },[])
         {
          console.log(users)
         }
         
      

         let deleteUser = async (data)=>{
          try {
            await fetch(`https://619856c0164fa60017c23011.mockapi.io/students/${data}`,{
              method :"DELETE",
            })
            let students =  await fetch("https://619856c0164fa60017c23011.mockapi.io/students")
            let studentsData = await students.json()
            setUsers(studentsData)
          
           }
           catch (error) {
                 console.log(error)
           }
         }
     
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User List</h1>
                <Link to="Create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create New User</Link>
            </div>
            <div class="card text-center">
  <div class="card-header">
    User Details
  </div>
  <div class="card-body">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
     
      users.map((user,index) =>{
        return (
          <tr>
          <th scope="row">{index+1}</th>
          <td>{user.name}</td>
          <td>{user.PhoneNumber}</td>
          <td>{user.Email}</td>
          <td>{user.Address}</td>
          <td>
            <Link to={`edit/${user.id}`}><button type="button" class="btn btn-primary btn-sm">Edit</button></Link>
            <button onClick={()=>{deleteUser(user.id)}} type="button" class="btn btn-danger btn-sm">Delete</button></td>
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