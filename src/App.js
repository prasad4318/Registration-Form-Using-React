import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import '@fortawesome/fontawesome-free/css/all.css';



const App = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Update document title when component mounts
  useEffect(() => {
    document.title = 'Registration Form'; // Set the document title here
  }, []);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignInSubmit = () => {
    if (!successMessage) {
      setSuccessMessage('Sign in successful!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Reset after 3 seconds
    }
  };

  const handleSignUpSubmit = () => {
    if (!successMessage) {
      setSuccessMessage('Sign up successful!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Reset after 3 seconds
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUpMode ? (
            <SignUpForm onSignUpSubmit={handleSignUpSubmit} />
          ) : (
            <SignInForm onSignInSubmit={handleSignInSubmit} />
          )}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Create an account to get started with our services and discover a world of possibilities!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
  
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Already a member? Log in to access your account and continue where you left off.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
         
        </div>
      </div>

      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default App;
