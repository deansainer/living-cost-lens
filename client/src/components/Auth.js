import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

const Auth = () => {


  function viewLogIn(status) {
    setIsLogin(status)
  }

  const [message, setMessage] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  async function onSubmitForm(e, endpoint){
    e.preventDefault()
    setMessage('')
    const response = await axios.post(`http://localhost:3001/api/users/${endpoint}`, {username, password})
    if(response.data.token && response.data.username){
      Cookies.set('username', response.data.username, { expires: 7 });
      Cookies.set('token', response.data.token, { expires: 7 });
      window.location.reload()
    } else {
      setMessage('Auth action failed :(')
    }
    
  }

  return (
    <div className='overlay'>
        <div className='form_container'>
          
            {isLogin ? <h4>Log in</h4> : <h4>Sign up</h4>}
            <form className='auth_form'>
                <input value={username} type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
                <input value={password} type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                {!isLogin && <input  value={confirmPassword} type='password' placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)}></input>}
                <button onClick={(e) => onSubmitForm(e, isLogin ? 'login' : 'signup')}>Submit</button>
            </form>

            <div className='auth_buttons'>
                <button type='button' onClick={() => viewLogIn(true)} className='auth_btn'>Log in</button>
                <button type='button' onClick={() => viewLogIn(false)} className='auth_btn'>Sign in</button>
            </div>
            {message && <span style={{color: 'red'}}>{message}</span>}
        </div>
        </div>
  )
}

export default Auth