import React, {useState} from 'react'
import classNames from 'classnames';
import { useNavigate, Link } from 'react-router-dom'
import './menubar.scss'

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className={classNames('menu-toggle', { 'is-active': isOpen })} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={classNames('menu', { 'is-active': isOpen })}>
        <div id = "link-container">
          <a href="#" className="menu-link">ABOUT</a>
          <Link to="/studios"> <a className="menu-link">STUDIO SPACE</a> </Link>
          <a href="#" className="menu-link">CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default MenuBar