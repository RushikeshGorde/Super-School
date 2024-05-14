import React from 'react'
import menu from '../navbardata/NavbarLinkData'
import { Link } from 'react-router-dom'
import './Navbar.css'
import sc from "../Photo/sc1.png"
const Navbar = () => {
    return (
        <>
            <div className="container-fluid p-0 sticky-top">
                <div className="navbar-1">

                    <nav className="navbar nav-1 --navbar-1 m-0   navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="navbar-brand">
                            <img className='hed-1 d-non' src={sc} alt="" />
                                <span className='h4 nav-head text-white nav-head-2 mx-2'>SUPER SCHOOL</span>
                            </div>
                            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar2"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars text-light"></i>
                            </button>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav ml-auto">
                                    <li className="d-flex border-right">
                                        <Link className="nav-link text-white" to={'/facebook'}>
                                            <i className="fab fa-facebook-f face"></i>
                                        </Link>
                                        <Link className="nav-link text-white " to={'/twitter'}>
                                            <i className="fab fa-twitter twiter"></i>
                                        </Link>
                                        <Link className="nav-link text-white" to={'/https://www.youtube.com/'}>
                                            <i className="fab fa-youtube yt"></i>
                                        </Link>
                                        <Link className="nav-link text-white" to={'/linkedin'}>
                                            <i className="fab fa-linkedin-in linked"></i>
                                        </Link>
                                        <Link className="nav-link text-white" to={'/instagram'}>
                                            <i className="fab fa-instagram insta"></i>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link className="nav-link text-white" to={'tel:9519519521'}>
                                            <i className="fas fa-phone-volume mx-1"></i>
                                            Call +91 9519519521
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-white" to={'mailto:Info@superschool.com'}>
                                            <i className="fas fa-envelope mx-1"></i>
                                            Info@superschool.com
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item border-left">
                                <Link className="nav-link text-white" to={'/login'}>
                                    <i className="fas fa-sign-in-alt mx-1"></i>
                                    Login
                                </Link>
                            </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                <div className="navbar-2">

                    <nav className="navbar nav-1 --navbar2 p-0 m-0 navbar-expand-lg bg-light shadow-sm">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbar2">
                                <ul className="navbar-nav ">
                                    {menu ? menu.map((item, index) => (
                                        <li className="nav-item dropdown navItem" key={index}>
                                            <Link className="nav-link text-dark" to={item.path} data-bs-toggle="dropdown" aria-expanded="false">
                                                {item.title}
                                            </Link>
                                            <ul className="dropdown-menu bg-primary p-0">
                                                {item.childrens ? item.childrens.map((child, childIndex) => (
                                                    <li className="nav-item dropend border-bottom" key={childIndex}>
                                                        <Link className="nav-link mx-3 p-1 text-decoration-none text-white" to={child.path} role='button' data-bs-toggle="dropdown" aria-expanded="false">
                                                            {child.title}
                                                        </Link>
                                                        {child.childrens ? (
                                                            <ul className="dropdown-menu bg-primary p-0">
                                                                {child.childrens.map((subChild, subChildIndex) => (
                                                                    <li className='nav-item dropend border-bottom' key={subChildIndex}>
                                                                        <Link className="dropdown-item text-decoration-none text-black" role='button' data-bs-toggle="dropdown" aria-expanded="false" to={subChild.path}>
                                                                            {subChild.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : null}
                                                    </li>
                                                )) : null}
                                            </ul>
                                        </li>
                                    )) : null}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
