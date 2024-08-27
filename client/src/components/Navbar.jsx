import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({ totalQuantity, totalPrice }) => {
    // const total = 25000
    const token = false

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            {/* <a className="navbar-brand p-1"> Pizzeria Mamma Mia</a> */}
            <Link to="/" className="navbar-brand p-1">🍕 Pizzeria Mamma Mia</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    {token ? (
                        <>
                            <li className="nav-item">
                                <Link to="/" className="text-white ms-3 text-decoration-none">Home</Link>
                                {/* <a className="nav-link text-light" href="#">🍕 Home</a> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔓 Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔒 Logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-light">Home</Link>
                                {/* <a className="nav-link text-light" href="#">🍕 Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">🔐 Login</Link>
                                {/* <a className="nav-link" href="#">🔐 Login</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">🔐 Registrate</Link>
                                {/* <a className="nav-link" href="#">🔐 Register</a> */}
                            </li>
                        </>
                    )}
                </ul>
                <div className="d-flex align-items-center">
                    <span className="navbar-text text-light p-2">
                        {/* 🛒 Total: ${total.toLocaleString()} */}
                        <Link to="/cart" className="text-light text-decoration-none ">🛒 {totalQuantity} - $ {totalPrice.toLocaleString()}</Link>
                        {/* 🛒 ({totalQuantity} items) - $ {totalPrice.toLocaleString()} */}
                    </span>
                    <Link to="/profile">
                        <a
                            data-mdb-dropdown-init
                            className="nav-link p-2 d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                className="rounded-circle"
                                height="28"
                                alt="Portrait of a Woman"
                                loading="lazy"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;