import React from 'react'

const Login = () => {

  function sendData(){
    let data = {
      "username": "anilkumar",
      "email": "anilkumar@gmail.com",
      "password": "Anilkumar12345"
    }

    fetch(`http://localhost:1337/api/auth/local/register`,{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    })
  }

  return (
    <div>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-sm-4 offset-4'>
            <div className='card p-3'>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="username" className="form-control" id="username" />
             
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" className="form-control" id="email" />
             
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">password</label>
                <input type="password" name="password" className="form-control" id="password" />
             
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

export default Login
