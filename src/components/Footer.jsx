import gallery_01 from "../assets/images/gallery/gallery_01.jpg";
import gallery_02 from "../assets/images/gallery/gallery_02.jpg";
import gallery_03 from "../assets/images/gallery/gallery_03.jpg";
import gallery_04 from "../assets/images/gallery/gallery_04.jpg";
import gallery_05 from "../assets/images/gallery/gallery_05.jpg";
import gallery_06 from "../assets/images/gallery/gallery_06.jpg";

const Footer = () => {

    return(
        <>
        <footer className="container-fluid footer">
            <div className="container">
                <div className="foot-row row">
                    <div className="col-md-4 address">
                        <h4>Contact Us</h4>
                        
                        <p>8th flora, 500/D Amlod road, Tender <br/>
                        lane New York-1782 <br/>
                        +10 367 654 345 <br/>
                        contact@smarteyeapps.com</p>
                    </div>
                    <div className="col-md-2 qlink">
                        <h4>Conpany</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Packages</a></li>
                            <li><a href="">Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 destinations">
                        <h4>Popular Destinations</h4>
                        <ul>
                            <li><a href="">Indonesia</a></li>
                            <li><a href="">India</a></li>
                            <li><a href="">Italy</a></li>
                            <li><a href="">Frencs</a></li>
                            <li><a href="">Switzerland</a></li>
                            <li><a href="">Americak</a></li>
                            <li><a href="">Australia</a></li>
                            <li><a href="">Cnada</a></li>
                            <li><a href="">England</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 gallery">
                    <h4>Gallery</h4>
                        <div className="row gallery-row">
                            <div className="col-4 lck">
                                <img src={gallery_01} alt=""/>
                            </div>
                            <div className="col-4 lck">
                                <img src={gallery_02} alt=""/>
                            </div>
                            <div className="col-4 lck">
                                <img src={gallery_03} alt=""/>
                            </div>
                            <div className="col-4 lck">
                                <img src={gallery_04} alt=""/>
                            </div>
                            <div className="col-4 lck">
                                <img src={gallery_05} alt=""/>
                            </div>
                            <div className="col-4 lck">
                                <img src={gallery_06} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <a href="https://www.smarteyeapps.com/">2019 © All Rights Reserved | Designed and Developed by Smarteyeapps</a>
                    <span>
                        <a><i className="fab fa-github"></i></a>
                        <a><i className="fab fa-google-plus-g"></i></a>
                        <a><i className="fab fa-pinterest-p"></i></a>
                        <a><i className="fab fa-twitter"></i></a>
                        <a><i className="fab fa-facebook-f"></i></a>
                    </span>
                </div>
            </div>
        </footer>   
        </>
    );
}


export default Footer;