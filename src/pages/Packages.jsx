import p1 from "../assets/images/packages/p1.jpg"
import p2 from "../assets/images/packages/p2.jpg"
import p3 from "../assets/images/packages/p3.jpg"
import p4 from "../assets/images/packages/p4.jpg"
import p5 from "../assets/images/packages/p5.jpg"
import p6 from "../assets/images/packages/p6.jpg"
import Layout from "../Layouts/Layout"
import {Link} from "react-router-dom"

const Packages = () => {
    return(
        <>
        <Layout>
         <div className="page-nav no-margin row">
            <div className="container">
                <div className="row">
                    <h2>Our Packages</h2>
                    <ul>
                        <li> <Link to="/index"><i className="fas fa-home"></i> Home</Link></li>
                        <li><i className="fas fa-angle-double-right"></i> Packages</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="popular-pack  container-fluid">
            <div className="container">
                
                <div className="row pack-row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="pack-col">
                            <img src={p1} alt=""/>
                            <div className="revire row no-margin">
                                <ul className="rat">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <span className="pric">
                                    $750
                                </span>
                            </div>
                            <div className="detail row no-margin">
                                <h4>Amazon Cruise</h4>
                                <p>Mattis interdum nunc massa. Velit. Nonummy penatibus</p>
                            </div>
                            <div className="options row no-margin">
                                <ul>
                                    <li><i className="fas fa-car"></i></li>
                                    <li><i className="fab fa-fly"></i></li>
                                    <li><i className="fas fa-cocktail"></i></li>
                                    <li><i className="fas fa-umbrella-beach"></i></li>
                                    <li><i className="far fa-bell"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="pack-col">
                            <img src={p2} alt=""/>
                            <div className="revire row no-margin">
                                <ul className="rat">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <span className="pric">
                                    $750
                                </span>
                            </div>
                            <div className="detail row no-margin">
                                <h4>Spain, Benidorm</h4>
                                <p>Mattis interdum nunc massa. Velit. Nonummy penatibus</p>
                            </div>
                            <div className="options row no-margin">
                                <ul>
                                    <li><i className="fas fa-car"></i></li>
                                    <li><i className="fab fa-fly"></i></li>
                                    <li><i className="fas fa-cocktail"></i></li>
                                    <li><i className="fas fa-umbrella-beach"></i></li>
                                    <li><i className="far fa-bell"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="pack-col">
                            <img src={p3} alt=""/>
                            <div className="revire row no-margin">
                                <ul className="rat">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <span className="pric">
                                    $750
                                </span>
                            </div>
                            <div className="detail row no-margin">
                                <h4>Mauritius Island, Africa</h4>
                                <p>Mattis interdum nunc massa. Velit. Nonummy penatibus</p>
                            </div>
                            <div className="options row no-margin">
                                <ul>
                                    <li><i className="fas fa-car"></i></li>
                                    <li><i className="fab fa-fly"></i></li>
                                    <li><i className="fas fa-cocktail"></i></li>
                                    <li><i className="fas fa-umbrella-beach"></i></li>
                                    <li><i className="far fa-bell"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="pack-col">
                            <img src={p4} alt=""/>
                            <div className="revire row no-margin">
                                <ul className="rat">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <span className="pric">
                                    $750
                                </span>
                            </div>
                            <div className="detail row no-margin">
                                <h4>First-className Impressions</h4>
                                <p>Mattis interdum nunc massa. Velit. Nonummy penatibus</p>
                            </div>
                            <div className="options row no-margin">
                                <ul>
                                    <li><i className="fas fa-car"></i></li>
                                    <li><i className="fab fa-fly"></i></li>
                                    <li><i className="fas fa-cocktail"></i></li>
                                    <li><i className="fas fa-umbrella-beach"></i></li>
                                    <li><i className="far fa-bell"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="pack-col">
                            <img src={p6} alt=""/>
                            <div className="revire row no-margin">
                                <ul className="rat">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <span className="pric">
                                    $750
                                </span>
                            </div>
                            <div className="detail row no-margin">
                                <h4>Amazon Cruise</h4>
                                <p>Mattis interdum nunc massa. Velit. Nonummy penatibus</p>
                            </div>
                            <div className="options row no-margin">
                                <ul>
                                    <li><i className="fas fa-car"></i></li>
                                    <li><i className="fab fa-fly"></i></li>
                                    <li><i className="fas fa-cocktail"></i></li>
                                    <li><i className="fas fa-umbrella-beach"></i></li>
                                    <li><i className="far fa-bell"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="pack-col">
                            <img src={p5} alt=""/>
                            <div className="revire row no-margin">
                                <ul className="rat">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <span className="pric">
                                    $750
                                </span>
                            </div>
                            <div className="detail row no-margin">
                                <h4> Cruise Amazon</h4>
                                <p>Mattis interdum nunc massa. Velit. Nonummy penatibus</p>
                            </div>
                            <div className="options row no-margin">
                                <ul>
                                    <li><i className="fas fa-car"></i></li>
                                    <li><i className="fab fa-fly"></i></li>
                                    <li><i className="fas fa-cocktail"></i></li>
                                    <li><i className="fas fa-umbrella-beach"></i></li>
                                    <li><i className="far fa-bell"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        </>
    );
}
export default Packages;