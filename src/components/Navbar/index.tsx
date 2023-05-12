import React from 'react'

function Navbar() {
  return (
    <nav className="navbar px-4 navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand " href="#">ICE AND FIRE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home </a>
            </li>
           
            
          </ul>
        </div>
      </nav>
      
  )
}

export default Navbar