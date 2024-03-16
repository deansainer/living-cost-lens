import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import Alert from '@mui/material/Alert';

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
    setMessage('')
    e.preventDefault()
    if(!isLogin && password !== confirmPassword){
      setMessage("Passwords doesnt match")
      return;
    }
    const response = await axios.post(`http://localhost:3001/api/users/${endpoint}`, {username, password})

    if(isLogin && !response.data.token){
      setMessage("Log in failed")
    } else {
      if(response.data.token && response.data.username){
        Cookies.set('username', response.data.username, { expires: 7 });
        Cookies.set('token', response.data.token, { expires: 7 });
        window.location.reload()
      }
    }
  }

  return (
    <div className='overlay'>
      
        <div className='form_container'>
        {message && <Alert className='message_alert' severity="error">{message}</Alert>}

            {isLogin ? <h3 className='type_of_form'>Log in</h3> : <h3 className='type_of_form'>Register</h3>}
            <form className='auth_form'>
                <input value={username} type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
                <input value={password} type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                {!isLogin && <input  value={confirmPassword} type='password' placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)}></input>}
                <button className='auth_form_submit' onClick={(e) => onSubmitForm(e, isLogin ? 'login' : 'signup')}>Submit</button>
            </form>
    
            <div className='auth_buttons'>
                <button style={isLogin ? {backgroundColor: '#cfcfcf'} : {backgroundColor: 'white'}} type='button' onClick={() => viewLogIn(true)} className='auth_type_btn'>Log in</button>
                <button style={isLogin ? {backgroundColor: 'white'} : {backgroundColor: '#cfcfcf'}} type='button' onClick={() => viewLogIn(false)} className='auth_type_btn'>Sign in</button>
            </div>
        </div>
      </div>
  )
}

export default Auth