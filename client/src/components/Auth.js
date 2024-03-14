import React, { useState } from 'react'
import axios from 'axios';
import {useCookies} from 'react-cookie'

const Auth = () => {

  function viewLogIn(status) {
    setIsLogin(status)
    console.log(isLogin);
  }
  
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [cookies, setCookies, removeCookies] = useCookies(null)

  async function handleSubmit(e, endpoint){
    e.preventDefault()
    if (password === confirmPassword || endpoint === 'login') {
      const response = await axios.post(`http://localhost:3001/api/users/${endpoint}`, {
            email: email,
            password: password
        })
        if(!response.data.token){
          console.log('error');
        } else {
            setCookies('Email', response.data.email)
            setCookies('AuthToken', response.data.token)
            
            window.location.reload()
        }

    }
  }

  return (
    <div className='overlay'>
        <div className='form_container'>
            {isLogin ? <h4>Log in</h4> : <h4>Sign up</h4>}
            <form className='auth_form'>
                <input value={email} type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
                <input value={password} type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                {!isLogin && <input  value={confirmPassword} type='password' placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)}></input>}
                <button onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')}>Submit</button>
            </form>

            <div className='auth_buttons'>
                <button type='button' onClick={() => viewLogIn(true)} className='auth_btn'>Log in</button>
                <button type='button' onClick={() => viewLogIn(false)} className='auth_btn'>Sign in</button>
            </div>
        </div>
        </div>
  )
}

export default Auth