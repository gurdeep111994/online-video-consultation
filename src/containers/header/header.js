import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const header = ({ logout, userInfo }) => {
    return (
        <nav
            id="navbar-main"
            className="navbar navbar-main navbar-expand-lg navbar-light headroom customer-menu bg-color"
        >
            <div className="container">
                <Link className="navbar-brand" to='/home'>
                    <span className="logo">
                        <img src="assets/images/logo.png" />
                    </span>{" "}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse collapse" id="navbar_global">
                    <ul className="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto ">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/home'>
                                <span className="nav-link-inner--text"> Home </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about-us'>
                                <span className="nav-link-inner--text"> About </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/session'>
                                <span className="nav-link-inner--text"> Session </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact-us'>
                                <span className="nav-link-inner--text"> Contact Us </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>
                                <button
                                    type="button"
                                    className="btn btn-dark login-btn text-center mx-2 btn-lg"
                                    onClick={logout}
                                >
                                    {" "}
                Logout{" "}
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

header.propTypes = {
    logout: PropTypes.func.isRequired
}

export default header;
