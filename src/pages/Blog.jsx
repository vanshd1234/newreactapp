import p1 from "../assets/images/packages/p1.jpg"
import p2 from "../assets/images/packages/p2.jpg"
import p3 from "../assets/images/packages/p3.jpg"
import p4 from "../assets/images/packages/p4.jpg"
import p5 from "../assets/images/packages/p5.jpg"
import p6 from "../assets/images/packages/p6.jpg"
import Layout from "../Layouts/Layout"
import {Link} from "react-router-dom"

const Blog = () => {
    return(
        <>
        <Layout>
        <div className="page-nav no-margin row">
            <div className="container">
                <div className="row">
                    <h2>Our Blog</h2>
                    <ul>
                        <li> <Link to="/index"><i className="fas fa-home"></i> Home</Link></li>
                        <li><i className="fas fa-angle-double-right"></i> Blog</li>
                    </ul>
                </div>
            </div>
        </div>
       
          
        <div className="blog container-fluid">
            <div className="container">
                
                <div className="row blog-row">
                    <div className="col-md-4">
                        <div className="blogcol">
                            <img src={p1} alt=""/>
                              <span>Oct 12, 2019</span> 
                              <h4>Journeys Are Best Measured In New Friends</h4> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogcol">
                            <img src={p2} alt=""/>
                              <span>Oct 12, 2019</span> 
                              <h4>Morbi sollicitudin nisi id consequat bibendum</h4> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogcol">
                            <img src={p3} alt=""/>
                              <span>Oct 12, 2019</span> 
                              <h4>Journeys Are Best Measured In New Friends</h4> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogcol">
                            <img src={p4} alt=""/>
                              <span>Oct 12, 2019</span> 
                              <h4>Journeys Are Best Measured In New Friends</h4> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogcol">
                            <img src={p5} alt=""/>
                              <span>Oct 12, 2019</span> 
                              <h4>Journeys Are Best Measured In New Friends</h4> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blogcol">
                            <img src={p6} alt=""/>
                              <span>Oct 12, 2019</span> 
                              <h4>Journeys Are Best Measured In New Friends</h4> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        </>
    );
};

export default Blog;