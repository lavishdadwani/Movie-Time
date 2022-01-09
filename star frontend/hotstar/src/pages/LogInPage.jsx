import React, { Component } from 'react'
import {Link} from "react-router-dom"
// import { BsFacebook } from "react-icons/bs";
// import { FaGoogle } from "react-icons/fa";
import {GoogleLogin} from "react-google-login"
import "../styles/login.css"
import { google_login, log_in } from '../redux/action/userAction';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom"
import {CLINT_ID} from "../config"
import Navbar from '../component/Navbar';
 class LogInPage extends Component {
     state={
         email:"",
         password:""
     }

     handelChange = e=>{
         this.setState({[e.target.name]:e.target.value})
     }
     handelSubmit = e=>{
         e.preventDefault()
         const {email,password} = this.state
         this.props.log_in(email,password)
     }
     responseGoogle = async res =>{
        console.log(res)
        if(res.error)return console.log(res.error) 
         if(this.responseGoogle.error){alert.error(res.error)};
         await this.props.google_login(res)
        //  console.log({...res.profileObj,...res.tokenObj})
     } 

    render() { if(this.props.user) return <Redirect to="/" />
        return (
            <>
            <Navbar/>
            <div className="logIn_page">
                <div className="imageBack">
               <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/8b897a27-47f0-42d0-bb50-10fdb72d34a2/IN-en-20211004-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
                </div>
                <div className="login_container">
                    <div className="h2">
                        <h1>Sign In</h1>
                    </div>
                    <form onSubmit={this.handelSubmit}>
                    <input type="text" name="email" value={this.state.email}  placeholder="Email" required onChange={this.handelChange} />
                    <input type="password" name="password" value={this.state.password}  placeholder="Password" required onChange={this.handelChange} />
                    <input style={{"backgroundColor":"#E50941","padding":"16px 150px","color":"#fff"}} className="btn signIn" type="submit" value="Sign In" />
                    </form>
                    <div className="needHelp">
                        <Link to="/forgotPassword" >Need Help?</Link>
                    </div>
                    <div className="signUp"><p>New to Movie Time? <Link to="/signUp">Sign Up Now</Link></p>
                    {/* <button type="submit"><BsFacebook/> Login With Facebook  </button> */}

                    <GoogleLogin
                     clientId={CLINT_ID}
                     buttonText="Login"
                     onSuccess={this.responseGoogle}
                     onFailure={this.responseGoogle}
                     scope="https://www.googleapis.com/auth/userinfo.email"
                     cookiePolicy={'single_host_origin'}
                    />
                    
                     </div>
                </div>
                {/* <div className="footer">
                    <div className="footerSub">
                    FAQ 
                    </div>
                    <div className="footerSub">
                    HelpCentre
                    </div>
                    <div className="footerSub">
                    Terms of Use
                    </div>
                    <div className="footerSub">
                    Privacy 
                    </div>
                    <div className="footerSub">
                    Cookie Preferences
                    </div>
                    <div className="footerSub">
                     Corporate Information
                    </div>
                </div> */}
            </div>
            </>
        )
    }
}

const mapStateStore = stateStore=>{
    return{
        user:stateStore.userState.user
    }
}
export default connect(mapStateStore,{log_in,google_login})(LogInPage)
