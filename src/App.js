import React from 'react';
import 'src/Styles/main.scss';

function App() {
  return (
    <div className="container d-flex justify-center align-center">
      <div className="card rounded">
        <div className="d-flex justify-center logo-container">
          <label htmlFor="logo">
            <img src="https://i.pinimg.com/originals/b3/2d/65/b32d659e36e50e459e00ed3957a10551.png" alt="rocket-logo" width="70" height="70" />
          </label>
        </div>
        <form className="form-login d-flex flex-col align-center">
          <div className="username-container d-flex flex-col">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username-login" />
          </div>
          <div className="password-container d-flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password-login" />
          </div>
          <button type="submit" className="btn btn-primary block rounded">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
