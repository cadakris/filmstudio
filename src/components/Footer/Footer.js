import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import './_footer.scss'


function Footer() {
    
    const navigate = useNavigate()

  return (
    <>
        <div className="footerSection">
            <Link to="/contact">
                <button>Contact</button>
            </Link>


            <div className="copyRightText">
                <p>© 2 0 2 3  M A H E R  S T U D I O S</p>
            </div>
        </div>

    </>
  )
}

export default Footer