import React from 'react';


const Header = () => (
  <header className="site-header">
      <div className="logo">
         <img src="/images/logo.png" height="42" />
      </div>
      <nav className="nav site-navigation">
            <a className="nav-link" href="#">Create an account</a>
            <a className="nav-link" href="#">Login</a>
      </nav>
  </header>
)

export default Header;
