import React from 'react';
import logo from '../image/logo.png';
import { FaMagnifyingGlass, FaBell, FaUser } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <img src={logo} style={{ width: '100px', height: '55px', margin: '0 10px' }} alt="Logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                My List
              </a>
            </li>
          </ul>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <FaMagnifyingGlass className='text-white mx-2' />
          <div className='text-white mx-2'>KIDS</div>
          <FaBell className='text-white mx-2' />
          <FaUser className='text-white mx-2' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
