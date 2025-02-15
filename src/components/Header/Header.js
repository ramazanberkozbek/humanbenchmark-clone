import React from "react"
import { Link } from 'react-router-dom';
import { FaBoltLightning } from "react-icons/fa6"
import "./style.css"

function Header() {
  return (
    <header>
      <div className='header-left'>
        <Link to='/'>
          <div><FaBoltLightning /> HUMAN BENCHMARK</div>
        </Link>
        <div className='dashboard'>DASHBOARD</div>
      </div>
      <div className='header-right'>
        <div className='signUp'>SIGN UP</div>
        <div className='logIn'>LOGIN</div>
      </div>
    </header>
  );
}

export default Header;