import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router'
import { find_email } from '../redux/action/userAction'
import validator from "validator"
import "../styles/forgotPassword.css"
import Navbar from '../component/Navbar'
const ForgotPassword = ({find_email,history,token}) => {
const [email, setemail] = useState(" ")
console.log(history)
const handelSubmit = e=>{
    e.preventDefault()
    if(!validator.isEmail(email)) return alert("Enter A Valid Email")
    find_email(email)
}

    return (
        <>
        <Navbar />
        {/* {token && <Redirect to="/forgotpassword2" />} */}
        <div className="forgotPasswordPage">
            <form className="forgotPassword" onSubmit={handelSubmit} >
                <h1>Enter Your Email</h1>
                <input className="inputFP" type="email" name="email" placeholder="Enter Your Email" required onChange={e=>setemail(e.target.value)} value={email}  />
                <input className="fpBtn" type="submit" value="Find" />
            </form>
        </div>
        </>
    )
}


const mapStateStore = stateStore =>{
    return{
        user:stateStore.userState.user,
        token:stateStore.userState.findEmail
    }
}
export default connect(mapStateStore,{find_email})(ForgotPassword)
