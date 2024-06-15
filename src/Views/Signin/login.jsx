import './login.css'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()       // error input field state

  const navigate = useNavigate()

  const UserLoggedIn = async () => {

    if (!email || !password) {
      setError('please fill in all input fields')
      return;
    }
    console.log('email:', email);
    console.log('password:', password);

    try {

    const response = await fetch('http://localhost:3001/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
     })

     console.log(email , password);

     const json = await response.json()
     console.log('json', json);

     if (json.error) {
      alert('Invalid Credentials')
     } else {
      navigate('/dashboard')
     }

    } catch (error) {
      console.error('Error login user:', error);
    }

  }
  //http://localhost:3001/users/login
    return (

      <div className='loginbody'>
                                            <h2>MERN-STACK</h2> 
        <div className='logincontent'>
                                            
          <div className="loginHeader">Sign In</div>
{error}
          <div>

            <div className='loginfield'>
              <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='loginfield'>
              <input type="password" placeholder='Password'  onChange={(e) => setPassword(e.target.value)}  />
            </div>

            <div class="forgot-pass">
              <span onClick={() => navigate('/forgotPassword')}>Forgot Password?</span>
              </div>

            <button className='loginBtn'  onClick={UserLoggedIn}  >Login</button>

            <div class="signup">Don't have an account?
                  <span onClick={() => navigate('/register')}> Sign-up</span>
             </div>

          </div>

        </div>

      </div>
      
  
    )
}

export default Login;






