import React, { useState } from 'react';
import './LandingPage.css';

// login and registration
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

// logo import
import TheSixthLogo from '../../images/t6d.png';



function LandingPage() {
  const [heading, setHeading] = useState('Welcome');

  // variables
  const [login, setLogin] = useState(true); // toggle for login display

  // Function - toggle login and register boxes
  const loginOrRegister = (event) => {
    setLogin(!login);
    console.log(`login`, login);
  };




  return (
    <div className="landingPage">

      <div className='chevDiv'>
        <div className='chevRow'>
          <div className='chevTop yellow'></div>
          <div className='chevTop red'></div>
          <div className='chevTop blue'></div>
          <div className='chevTop'></div>
          <div className='chevTop white'></div>
          <div className='chevTop'></div>
        </div>
        <div className='chevRow'>
          <div className='chevBot yellow'></div>
          <div className='chevBot red'></div>
          <div className='chevBot blue'></div>
          <div className='chevBot '></div>
          <div className='chevBot white'></div>
          <div className='chevBot '></div>
        </div>
      </div>


      <div className='loginDiv'>
        <img src={TheSixthLogo} className='sixthLogo' alt='t6d-logo' />

        <div>
          <div className={login ? 'visible' : 'invisible'}>
            <LoginForm />
          </div>
          <div className={login ? 'invisible' : 'visible'}>
            <RegisterForm />
          </div>

        </div>
      </div>

      <div className={login ? 'visible' : 'invisible'}>
        <p>Don't have an Account yet?</p>
      </div>
      <div className={login ? 'visible' : 'invisible'}>
        <button className="btn btn_sm" onClick={loginOrRegister}>
          Register
        </button>
      </div>
      <div className={login ? 'invisible' : 'visible'}>
        <p>Already have an Account?</p>
      </div>
      <div className={login ? 'invisible' : 'visible'}>
        <button className="btn btn_sm" onClick={loginOrRegister}>
          Login
        </button>
      </div>


    </div>
  );
}

export default LandingPage;
