import logo from "../assets/images/logo.png"
import {Link} from "react-router-dom"
const Header = () => {


    return (
        <>
        <header className="conainer-fluid">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 logo">
                        <img src={logo} alt=""/>
                        <a data-toggle="collapse" data-target="#menu" href="#menu"><i className="fas d-block d-lg-none  small-menu fa-bars"></i></a>
                    </div>
                    <div className="col-md-8 d-none d-md-block clldetal">
                        <ul>
                            <li className="bgb"><i className="far fa-clock"></i> 09:00AM — 05:00PM</li>
                            <li className="bgb"><i className="fas fa-phone-alt"></i> +1 323-913-4688</li>
                            <li className="d-none d-lg-block"><button type="button" className="btn btn-outline-info">Get a Free Quote</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div id="menu" className="col-lg-8 col-md-12 d-none d-md-block navs">
                        <ul>
                            <li>
                                <Link to="/index">Home</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About US</Link>
                            </li>
                            <li>
                                <Link to="/packages">Our Packages</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-none d-lg-block socials">
                            <ul>
                                <li>
                                    <i className="fab fa-facebook-square"></i>
                                </li>
                                <li>
                                    <i className="fab fa-twitter-square"></i>
                                </li>
                                <li>
                                    <i className="fab fa-instagram"></i>
                                </li>
                                <li>
                                    <i className="fab fa-linkedin"></i>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    );

};

export default Header;