import React from "react"
import {Link} from "react-router-dom"

const Register = () =>{


    return(
        <form>
           <div className="row contact-rooo no-margin">
            <div className="container">
                <div className="row">


                    <div style={{padding:"20px"}} className="col-sm-7">
                        <h2 >Sign Up Form</h2> <br/>
                        <div className="row cont-row">
                            <div  className="col-sm-3"><label>First Name </label><span>:</span></div>
                            <div className="col-sm-8"><input type="text" placeholder="First Name" name="first_name" className="form-control input-sm"  /></div>
                        </div>
                        <div className="row cont-row">
                            <div  className="col-sm-3"><label>Last Name </label><span>:</span></div>
                            <div className="col-sm-8"><input type="text" placeholder="Last Name" name="last_name" className="form-control input-sm"  /></div>
                        </div>
                        <div  className="row cont-row">
                            <div  className="col-sm-3"><label>Email Address </label><span>:</span></div>
                            <div className="col-sm-8"><input type="email" name="email" placeholder="Enter Email Address" className="form-control input-sm"  /></div>
                        </div>
                        <div  className="row cont-row">
                            <div  className="col-sm-3"><label>Password</label><span>:</span></div>
                            <div className="col-sm-8"><input type="password" name="password" placeholder="Password Address" className="form-control input-sm"  /></div>
                        </div>
                        <div  className="row cont-row">
                            <div  className="col-sm-3"><label>Confirm Password:</label></div>
                            <div className="col-sm-8"><input type="password" name="confirm_password" placeholder="Confirm Password" className="form-control input-sm"  /></div>
                        </div>
                        <div  className="row cont-row">
                            <div  className="col-sm-3"><label>Mobile Number</label><span>:</span></div>
                            <div className="col-sm-8"><input type="text" name="name" placeholder="Enter Mobile Number" className="form-control input-sm"  /></div>
                        </div>
                        <div style={{marginTop:"10px"}} className="row">
                            <div style={{paddingTop:"10px"}} className="col-sm-3"></div>
                            <div className="col-sm-8">
                                <button className="btn btn-primary btn-sm">Submit</button>
                                <span style={{ marginLeft: '250px' }}></span>
                                <Link to="/">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </form>
    )
}

export default Register