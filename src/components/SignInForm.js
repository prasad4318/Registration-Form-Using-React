import React, { useState } from 'react';

const SignInForm = ({ onSignInSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signInSuccessLocal] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign up logic here (e.g., API call, validation)
    // For demonstration, assume sign up is successful
    // Notify parent component of successful sign up
    onSignInSubmit('Sign In successful!');
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required // Adding required attribute here
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required // Adding required attribute here
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      {signInSuccessLocal && (
        <div className="success-message">
          <p>Sign in successful!</p>
        </div>
      )}
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a
          href="https://www.facebook.com"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.google.com"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google"></i>
        </a>
        <a
          href="https://www.linkedin.com"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
};

export default SignInForm;
