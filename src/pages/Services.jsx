import Layout from "../Layouts/Layout"
import {Link} from "react-router-dom"

const Services = () => {
    return(
        <>
        <Layout>
        <div className="page-nav no-margin row">
            <div className="container">
                <div className="row">
                    <h2>Our Services</h2>
                    <ul>
                        <li> <Link to="/index"><i className="fas fa-home"></i> Home</Link></li>
                        <li><i className="fas fa-angle-double-right"></i> Services</li>
                    </ul>
                </div>
            </div>
        </div>
        
        
        <section className="out-services container-fluid">
            <div className="container">
            
                <div className="serv-row row">
                    <div className="col-md-4">
                    <div className="serv-col">
                        <div className="icon">
                            <i className="fas fa-plane-departure"></i>
                        </div>
                        <div className="detail">
                            <h4>Wide Variety of Tours</h4>
                            <p>Our unique matching system lets you find just the tour you want for your next holiday</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-4">
                    <div className="serv-col">
                        <div className="icon">
                            <i className="far fa-heart"></i>
                        </div>
                        <div className="detail">
                            <h4>Highly Qualified Service</h4>
                            <p>Our unique matching system lets you find just the tour you want for your next holiday</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-4">
                    <div className="serv-col">
                        <div className="icon">
                            <i className="far fa-comments"></i>
                        </div>
                        <div className="detail">
                            <h4>@4 x 7 Support</h4>
                            <p>Our unique matching system lets you find just the tour you want for your next holiday</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-4">
                    <div className="serv-col">
                        <div className="icon">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="detail">
                            <h4>Attractive Packages</h4>
                            <p>Our unique matching system lets you find just the tour you want for your next holiday</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-4">
                    <div className="serv-col">
                        <div className="icon">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <div className="detail">
                            <h4>Exciting Places</h4>
                            <p>Our unique matching system lets you find just the tour you want for your next holiday</p>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-4">
                    <div className="serv-col">
                        <div className="icon">
                            <i className="fas fa-car"></i>
                        </div>
                        <div className="detail">
                            <h4>Wide Variety of Tours</h4>
                            <p>Our unique matching system lets you find just the tour you want for your next holiday</p>
                        </div>
                    </div> 
                    </div>
                </div>
            </div>
        </section>   
        </Layout>
        </>
    );
}

export default Services;