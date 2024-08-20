import React from "react";

const Navbar = ({totalQuantity, totalPrice}) => {
    // const total = 25000
    const token = false

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <a className="navbar-brand p-1"> Pizzeria Mamma Mia</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    {token ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">🍕 Home</a>
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
                                <a className="nav-link text-light" href="#">🍕 Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔐 Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔐 Register</a>
                            </li>
                        </>
                    )}
                </ul>
                <span className="navbar-text text-light p-1">
                    {/* 🛒 Total: ${total.toLocaleString()} */}
                    🛒 ({totalQuantity} items) - $ {totalPrice.toLocaleString()}
                </span>
            </div>
        </nav>
    )
}

export default Navbar;