import React, { useState } from 'react'

export default function LoginSignup() {

  const [state, setState] = useState('Login')

  const [formData, setformData] = useState({
    username: '',
    password: '',
    email: '',
  })

  const changeHandler = (e) => {
    setformData({...formData, [e.target.name]:e.target.value})
  }


  const login = async () => {
    console.log('login',formData)
    let responseData;
    await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data) => responseData=data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.error)
    }
    
  }

  const signup = async () => {
    console.log('signup',formData)
    let responseData;
    await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data) => responseData=data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.error)
    }
  }

  return (
    <div className='pt-5' style={{ width: '100%', height: '90vh', backgroundColor: '#fce3fe' }}>
      <div className='p-5 ' style={{ width: '580px', height: '500px', margin: 'auto', backgroundColor: 'white' }}>
        <h3 className='fw-semibold'>{state}</h3>
        <div>
          {state === 'Sign Up' ? <input type="text" name='username' value={formData.username} onChange={changeHandler} className="mt-4 p-2 form-control border-dark" placeholder="Your Name" /> : <></>}
          <input type="email" name='email' value={formData.email} onChange={changeHandler} className="mt-4 p-2 form-control border-dark" placeholder="Email Address" />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} className="mt-4 p-2 form-control border-dark" placeholder="Password" />
        </div>
        <div onClick={state==='Login'?login:signup} style={{ cursor: 'pointer' }} className='bg-danger text-white text-center mt-4 p-2 fw-semibold rounded'>Continue</div>
        <div className='mt-4'>
          {state === 'Sign Up' ? <><span>Already have an account?</span>
            <span className='text-danger ms-2 fw-semibold' onClick={() => { setState('Login') }} style={{ cursor: 'pointer' }} >Login here</span></> : <><span>Create an account?</span>
            <span className='text-danger ms-2 fw-semibold' onClick={() => { setState('Sign Up') }} style={{ cursor: 'pointer' }} >Sign Up here</span></>}
        </div>
        <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            By Continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>

      </div>
    </div>
  )
}
