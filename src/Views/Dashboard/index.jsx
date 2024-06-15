import './index.css'
import { useNavigate } from 'react-router-dom'
import React from 'react';

function Dashboard() {

  const navigate = useNavigate()

 
  const userLogout = async () => {
    try {
        const response = await fetch('http://localhost:3001/users/logout', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // or wherever you store the token
            }
        });
 
        const data = await response.json();

        if (response.ok) {
            localStorage.removeItem('token'); // Remove token from local storage or wherever it's stored
            navigate('/login'); // Use navigate instead of history.push
        } else {
            console.error(data.message); // Handle error message
        }
    } catch (error) {
        console.error('An error occurred during logout:', error);
    }
};

  // const userLogout = async () => {       // http://localhost:3001/users/logout
    
  //   try {

  //     const response = await fetch('http://localhost:3001/users/logout', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // 'authorization': 'token'
  //         'authorization': `Bearer ${token}`, // Send the stored token
  //       },

  //       body: JSON.stringify({ email: email, password: password })
  //     })

  //     const json = await response.json()
  //     console.log('json', json);
 
  //     if (json.error) {

  //      alert('Logged Out Error')

  //     } else {
  //      navigate('/')
  //     }
      
  //   } catch (error) {
  //     console.error('Error loggedOut user:', error);
  //   }

  // }

    return (
        <div>

<div className="header">
      <div className="flex-div">
        <div className="bar-item flex-div">
          <img src="" width="40px" />
          <img src="" />
        </div>
        <div className="bar-item">
          <a href=""><i className="fa-solid fa-car"></i> MOTORS</a>
        </div>
        <div className="bar-item">
          <a href=""><i className="fa-regular fa-building"></i> PROPERTY</a>
        </div>
      </div>

      <div className="middle">
        <div className="sec-item flex-div">
          <img src="" width="90px" />
        </div>
        <div className="sec-item flex-div cls2">
          <select className="selectInput" name="" id="">
            <option value="Pakistan">Pakistan</option>
            <option value="Gadap">Gadap, town karachi</option>
            <option value="Gulshan">Gulshan</option>
            <option value="North Nazimabad">North Nazimabad</option>
          </select>
        </div>
        <div className="sec-item flex-div cls3">
          <input
            className="selectInput search"
            type="search"
            placeholder="Find Cars, Mobile Phones and more.."
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>


    {/* ====================== Add Post ===============================  */}

       <div className="addItems">
            <button onClick={() => navigate('/addPost')} className='adbtn'> Add Items </button>  
       </div>

     

   {/* ====================== LOGOUT ===============================  */}

        <div>
            <button onClick={userLogout} className='lgout'>Logout</button>
        </div>

            {/*  ****************footer*********************  */}

            <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>popular categories</h4>
                    <ul>
                        <li><a href="#">cars</a></li>
                        <li><a href="#">flats for rent</a></li>
                        <li><a href="#">mobile phones</a></li>
                        <li><a href="#">jobs</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>trending searches</h4>
                    <ul>
                        <li><a href="#">bikes</a></li>
                        <li><a href="#">watches</a></li>
                        <li><a href="#">books</a></li>
                        <li><a href="#">dogs</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>about us</h4>
                    <ul>
                        <li><a href="#">about dubizzle group</a></li>
                        <li><a href="#">OLX blog</a></li>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">OLX for business</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>olx</h4>
                    <ul>
                        <li><a href="#">help</a></li>
                        <li><a href="#">sitemap</a></li>
                        <li><a href="#">terms</a></li>
                        <li><a href="#">privacy policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
  </footer>

  {/*  ****************footer bottom credit*************  */}

  <div class="footer-credit">
     <div class="nd">
       <p><strong>Free Classifieds in Pakistan </strong>. © 2006-2023 OLX</p>
     </div>
  </div>
        </div>
    )
}

export default Dashboard;