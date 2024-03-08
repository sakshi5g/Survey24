import React from 'react'
import logo from '../images/nav.png'
import { Link } from 'react-router-dom';

export default function Appbar() {
    return (
        <div className='navbar-dark bg-dark shadow fixed-top'>
            <div className='container'>
                <div className='row'>
                    <div>
                        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                            <img className="navbar-brand" alt="logo"  src={logo} />

                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active h5 flex-row-reverse">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item form-inline my-2 my-lg-0 h5 text-end" >
                                        <Link to="/Survey" className="nav-link">Surveys</Link>
                                    </li>
                                    <li className="nav-item my-3 my-lg-0 h5 text-end">
                                        <Link to="/About" className="nav-link">About Us</Link>
                                    </li>

                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
