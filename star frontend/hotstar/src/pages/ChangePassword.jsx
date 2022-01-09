import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { change_password } from '../redux/action/userAction'
import "../App.css"
 class ChangePassword extends Component {
     state={
         oldPassword:"",
         newPassword:""
     }

     handelChange =e=>{
         this.setState({[e.target.name]:e.target.value})
     }
     handelSubmit = e=>{
         e.preventDefault()
         const {newPassword , oldPassword} = this.state
         this.props.change_password(oldPassword,newPassword)
         this.props.history.push("/myProfile")
      }
    render() {
        if(!this.props.user) return <Redirect to="/signIn" />
        return (
            <>
            <Navbar/>
            <div className="changePasswordPage">
                <div className="changePassword">
                <h1>Change Password</h1>
                <form className="passwordForm" onSubmit={this.handelSubmit} > 
                    <input className="passwordFormINP" type="password" name="oldPassword" required   placeholder="Enter Old Password" onChange={this.handelChange}  />
                    <input className="passwordFormINP" type="password" name="newPassword" required   placeholder="Enter New Password" onChange={this.handelChange} />
                    <input className="btnPass" type="submit" value="Update" />
                </form>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}
const mapStateStore = stateStore =>{
    return{
        user:stateStore.userState.user
    }
}
export default connect(mapStateStore,{change_password})(ChangePassword)
