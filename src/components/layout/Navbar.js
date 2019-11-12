import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='d-flex'>
      <h5 className='d-inline-block'>
        <i className={icon}></i> {title}
      </h5>
      <div className='nav-links ml-auto'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li className='ml-4'>
          <Link to='/about'>About</Link>
        </li>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github mr-2'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
