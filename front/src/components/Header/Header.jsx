import React from 'react';
import Main from './Main.jsx'
import LoginBtn from './LoginBtn.jsx'

function Header() {
  return (
    <header className="header">
      <Main />
      <h2>SayIt</h2>
      <LoginBtn />
    </header>
  );
}

export default Header;
