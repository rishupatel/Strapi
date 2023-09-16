import React, { useState } from 'react'

const Register = () => {

  // Hooks variable area

  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")

// function definition area
 function sendData(){

      let data = {
        'username':name,
        'email':email,
        'password':password
      }

          fetch(`http://localhost:1337/api/auth/local/register`,{
          method:"POST",
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
          }).then((response)=>{return response.json()}).then((item)=>{
            console.log(item)
          if(item.jwt){
            alert("you registerd successfully")
          }
          
          }).catch((err)=>{console.log(err)})


 }

// return statement
  return (
    <div>
       <div className='container mt-3'>
 <div className='row'>
   <div className='col-sm-4 offset-4'>
     <div className='card p-3'>
     <form>
       <div className="mb-3">
         <label htmlFor="username" className="form-label">Username</label>
         <input type="text" placeholder='enter username' value={name} onChange={(e)=>setName(e.target.value)} name="username" className="form-control" id="username" />
     
       </div>
       <div className="mb-3">
         <label htmlFor="email" className="form-label">Email</label>
         <input type="email" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control" id="email" />
     
       </div>
       <div className="mb-3">
         <label htmlFor="password" className="form-label">password</label>
         <input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)} name="password" className="form-control" id="password" />
     
       </div>
      
       <button type="button" onClick={()=>sendData()} className="btn btn-primary">Submit</button>
     </form>
     </div>
   </div>
 </div>
 </div> 
    </div>
  )
}

// export area
export default Register














 


// -----------------------------------------------------------------------

// function sendData(){
//   // let data = {
//   //   username: "Vivek",
//   //   email: "vivek@gmail.com",
//   //   password: "Vivek12345"
//   // }
//   let data = {
//     username: "Rahul",
//     email: "rahul@gmail.com",
//     password: "Rahul12345"
//   }

//   fetch(`http://localhost:1337/api/auth/local/register`,{
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
    
//     body: JSON.stringify(data)

//   }).then(()=>{}).then(()=>{}).catch(()=>{})
// }