import React, {useState} from 'react'
import classNames from 'classnames';
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
          <a href="#" className="menu-link">STUDIO SPACE</a>
          <a href="#" className="menu-link">CONTACT</a>
          <a href="#" className="menu-link">hello</a>
        </div>
      </div>
    </div>
  );
}

export default MenuBar