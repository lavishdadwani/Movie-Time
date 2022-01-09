import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Navbar from '../component/Navbar'
import { forgot_password, get_user } from '../redux/action/userAction'
import "../styles/forgotPassword.css"
class Forgotpassword2 extends Component {
    state={
        newPassword:"",
        cpassword:""
    }
    componentDidMount(){
        const token = this.props.match.params.token
        console.log(token)
        this.props.get_user(token)
    }
    handelChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handelSubmit=e=>{
        e.preventDefault()
        const {newPassword,cpassword} = this.state
        const token = this.props.match.params.token
        console.log(token)
        if(newPassword !== cpassword)return alert("password should be same")
        this.props.forgot_password(newPassword,cpassword,token)
    }
    render() {
        if(this.props.forgotPassword) return <Redirect to="/display" /> 
        return (
            <>
            <Navbar/>
            <div className="forgotPassword2Page">
           {this.props.user  ?  <div className="forgotPassword2">
               <h1>Reset Your Password </h1>
            <form className="FPform" onSubmit={this.handelSubmit}>
                <input style={{padding:"15px 40px" }} className="inputFP" type="password" name="newPassword" placeholder="Enter New Password" required onChange={this.handelChange} />
                <input style={{padding:"15px 40px" }} className="inputFP" type="password" name="cpassword" placeholder="Confirm Password" required onChange={this.handelChange} />
                <input className="fpBtn"  type="submit" value="Reset Password" />
            </form>
        </div>: <h1>"Loading"</h1>}
        </div>
        </>
        )
    }
}
const mapStateStore = stateStore=>{
    return{
        token:stateStore.userState.findEmail,
        user:stateStore.userState.getUser,
        forgotPassword:stateStore.userState.forgotPassword
    }
}
export default connect(mapStateStore,{forgot_password,get_user})(Forgotpassword2)
