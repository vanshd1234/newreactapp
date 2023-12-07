import React from "react"

function Register(){
    const Reg = () =>{

    };
    return(
        <form>
            <h3>
                Register Form
            </h3>
            <label>
                First Name : 
                <input
                type="text"
                name="first_name"
                />
            </label>
            <br/>
            <label>
                Last Name :
                <input
                type="text"
                name="last_name"
                />
            </label>
            <br/>
            <label>
                UserName : 
                <input
                type="text"
                name="username"
                />
            </label>
            <br/>
            <label>
                Password : 
                <input
                type="password"
                name="password"
                />
            </label>
            <br/>
            <label>
                Confirm Password :
                <input
                type="password"
                name="confirm_password"
                />
            </label>
            <br/>
            <label>
                Email :
                <input
                type="email"
                name="email"
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Register