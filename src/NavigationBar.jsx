import React from 'react'
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    const activeLink = "text-white";
    const normalLink = "text-secondary";


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">CO🌛ER'S HUB</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item mx-4  fw-bold">
                                <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)} style={{ textDecoration: "none" }}>Home</NavLink>
                            </li>
                            <li className="nav-item  mx-4  fw-bold">
                                <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)} style={{ textDecoration: "none" }}>About</NavLink>
                            </li>
                            <li className="nav-item mx-4  fw-bold ">
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? activeLink : normalLink)} style={{ textDecoration: "none" }}>Contact Us</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success mx-2 " type="submit">Search</button>
                        </form>
                        <div className='mx-2'>

                            <button type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#loginModal" >
                                Login
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal">
                                Sign Up
                            </button>

                        </div>
                    </div>
                </div>
            </nav>

            {/* Login Modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Login Into Coder's Hub </h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Login</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* SignUp Modal */}
            <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signupModalLabel">SignUp Into Coder's Hub </h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation" noValidate>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustom01">First name</label>
                                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustom02">Last name</label>
                                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationCustomUsername">Username</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                            </div>
                                            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom03">City</label>
                                        <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="validationCustom04">State</label>
                                        <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="validationCustom05">Zip</label>
                                        <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                                        <label className="form-check-label" htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default NavigationBar