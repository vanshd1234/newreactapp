import about from "../assets/images/about.jpg"
import team_memb1 from "../assets/images/team/team-memb1.jpg"
import team_memb2 from "../assets/images/team/team-memb2.jpg"
import team_memb3 from "../assets/images/team/team-memb3.jpg"
import team_memb4 from "../assets/images/team/team-memb4.jpg"
import Layout from "../Layouts/Layout"
import {Link} from "react-router-dom"

const AboutUs = () =>{
    return(
        <>
        <Layout>
        <div className="page-nav no-margin row">
            <div className="container">
                <div className="row">
                    <h2>About Tour & Travel</h2>
                    <ul>
                        <li> <Link to="/index"><i className="fas fa-home"></i> Home</Link></li>
                        <li><i className="fas fa-angle-double-right"></i> About Us</li>
                    </ul>
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
                        
        <section className="our-team">
            <div className="container">
                <div className="session-title row">
                    <h2>Our Team</h2>
                
                </div>
                <div className="row team-row">
                    <div className="col-md-3 col-sm-6">
                        <div className="single-usr">
                            <img src={team_memb1} alt=""/>
                            <div className="det-o">
                                <h4>David Kanuel</h4>
                                <i>Facial Surgan</i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-usr">
                            <img src={team_memb2} alt=""/>
                            <div className="det-o">
                                <h4>David Kanuel</h4>
                                <i>Facial Surgan</i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-usr">
                            <img src={team_memb3} alt=""/>
                            <div className="det-o">
                                <h4>David Kanuel</h4>
                                <i>Facial Surgan</i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="single-usr">
                            <img src={team_memb4} alt=""/>
                            <div className="det-o">
                                <h4>David Kanuel</h4>
                                <i>Facial Surgan</i>
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

export default AboutUs;