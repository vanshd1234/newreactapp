import Layout from "../Layouts/Layout"
import slid_2 from "../assets/images/slider/slid_2.jpg"
import slid_1 from "../assets/images/slider/slid_1.jpg"
import d1 from "../assets/images/destination/d1.jpg"
import d2 from "../assets/images/destination/d2.jpg"
import d3 from "../assets/images/destination/d3.jpg"
import about from "../assets/images/about.jpg"
import p1 from "../assets/images/packages/p1.jpg"
import p2 from "../assets/images/packages/p2.jpg"
import p3 from "../assets/images/packages/p3.jpg"
import member_01 from "../assets/images/testimonial/member-01.jpg"
import member_02 from "../assets/images/testimonial/member-02.jpg"
import member_03 from "../assets/images/testimonial/member-03.jpg"
// import p4 from "../assets/images/packages/p4.jpg"
// import p5 from "../assets/images/packages/p5.jpg"
// import p6 from "../assets/images/packages/p6.jpg"
// import p7 from "../assets/images/packages/p7.jpg"
// import p8 from "../assets/images/packages/p8.jpg"

const Index = () =>{

   
    return(
    <>
    <Layout>
        <div className="slider container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="single.html">
                            <img src={slid_2} className="d-block w-100" alt="..."/>
                        
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="single.html">
                            <img src={slid_1} className="d-block w-100" alt="..."/>
                            
                        </a>
                    </div>
                    
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        
        
        <div className="travel-destination container-fluid">
            <div className="container">
            
                <div className="destination-row row">
                    <div className="col-md-4 descol">
                    <div className="destcol">
                        <img src={d1} alt=""/>
                        <div className="layycover">
                            <h4>Brazil <span className="badge badge-info">5 Places</span></h4>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 descol">
                    <div className="destcol">
                        <img src={d2} alt=""/>
                        <div className="layycover">
                            <h4>Malaysia <span className="badge badge-info">5 Places</span></h4>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-md-4 descol">
                    <div className="destcol">
                        <img src={d3} alt=""/>
                        <div className="layycover">
                            <h4>Sri Lanka <span className="badge badge-info">5 Places</span></h4>
                        </div>
                    </div>
                    </div>
                    
                
                </div>
            </div>
        </div>
    
        <section id="about" className="contianer-fluid about-us">
            <div className="container">
                    <div className="row">
                        <div className="col-md-7 text">
                            <h2>About Smart Traveler</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. dummy text of the printing and  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.dummy text of the has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        
                        </div>
                        <div className="col-md-5 center image">
                            <img src={about} alt=""/>
                        </div>
                    </div>
            </div>
        </section>
        
        <section className="out-services container-fluid">
            <div className="container">
                <div className="session-title row">
                    <h2>Our Services</h2>
                    <p>when an unknown printer took a galley of type and scrambled it to make</p>
                </div>
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
        
        <div className="popular-pack  container-fluid">
            <div className="container">
                <div className="session-title row">
                    <h2>Popular packages</h2>
                    <p>when an unknown printer took a galley of type and scrambled it to make</p>
                </div>
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
                </div>
            </div>
        </div>
        
        <div className="what-people-say container-fluid">
            <div className="container">
                <div className="session-title row">
                    <h2>What people say about Us</h2>
                    <p>when an unknown printer took a galley of type and scrambled it to make</p>
                </div>
                <div className="what-people-say-row row">
                    <div className="col-md-4">
                        <div className="peole-col">
                            <img src={member_01} alt=""/>
                            <p>Sed sed mattis arcu, eget porttitor urna. Vestibulum ultricies varius suscipit. Quisque imperdiet justo at eleifend feugiat. In hac habitasse platea dictumst. Etiam in turpis in urna vulputate</p>
                            <h4>James Anderson</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="peole-col">
                            <img src={member_02} alt=""/>
                            <p>Sed sed mattis arcu, eget porttitor urna. Vestibulum ultricies varius suscipit. Quisque imperdiet justo at eleifend feugiat. In hac habitasse platea dictumst. Etiam in turpis in urna vulputate</p>
                            <h4>Philip Jasmes</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="peole-col">
                            <img src={member_03} alt=""/>
                            <p>Sed sed mattis arcu, eget porttitor urna. Vestibulum ultricies varius suscipit. Quisque imperdiet justo at eleifend feugiat. In hac habitasse platea dictumst. Etiam in turpis in urna vulputate</p>
                            <h4>Jason Rose</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        
        <div className="blog container-fluid">
            <div className="container">
                    <div className="session-title row">
                    <h2>Our Latest Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin nisi id consequat bibendum. Phasellus at convallis elit. In purus enim, scelerisque id arcu vitae</p>
                </div>
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
                </div>
            </div>
        </div>
    </Layout>
    </>
    );
}

export default Index;