import React from "react"
import {Link} from "react-router-dom"

const Login = () =>{
    return(
        <form>
           <div className="row contact-rooo no-margin">
            <div className="container">
                <div className="row">


                    <div style={{padding:"20px"}} className="col-sm-7">
                        <h2 >Sign In</h2> <br/>
                        <div  className="row cont-row">
                            <div  className="col-sm-3"><label>Email Address </label><span>:</span></div>
                            <div className="col-sm-8"><input type="email" name="email" placeholder="Enter Email Address" className="form-control input-sm"  /></div>
                        </div>
                        <div  className="row cont-row">
                            <div  className="col-sm-3"><label>Password</label><span>:</span></div>
                            <div className="col-sm-8"><input type="password" name="password" placeholder="Password Address" className="form-control input-sm"  /></div>
                        </div>
                        <div style={{marginTop:"10px"}} className="row">
                            <div style={{paddingTop:"10px"}} className="col-sm-3"></div>
                            <div className="col-sm-8">
                                <button className="btn btn-primary btn-sm">Submit</button>
                                <span style={{ marginLeft: '250px' }}></span>
                                <Link to="/register">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </form>
    )
}

export default Login