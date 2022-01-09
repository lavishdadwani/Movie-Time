import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { log_out } from '../redux/action/userAction'
import {BiArrowFromLeft} from "react-icons/bi"
import "../styles/navbar.css"

 class Navbar extends Component {

    state={
        query:''
    }
    handelLOGOUT=e=>{
        e.preventDefault()
        this.props.log_out()
    }


    render() {
        return (
            <div className="navbar">
        {this.props.user ? <>
          <div className="subNav">
               <Link className="btnNav2" to="/">Home</Link>
          <Link  className="btnNav2" to="/myProfile">My Profile</Link>
          </div>
          <div className="subNav">
         { this.props.user?.user?.isSubscribe === false &&  <Link  className="btnNav" to="/subcription">Subcribe </Link> }
         <button className="btn nabBtn" style={{marginRight:'10px'}} onClick={this.handelLOGOUT}>Log Out</button>
          </div>
           </> 
          : <div className="subNav2"> <Link className="btnsignIn" to="/signIn">Sign In</Link>
          <Link className="btnsignUp" to="/signUp">Sign Up    < BiArrowFromLeft style={{marginLeft:"8px"}} /></Link> </div>}
               
            </div>
        )
    }
}


const mapStateStore= stateStore=>{
    return{
        user:stateStore.userState.user
    }
}
export default connect(mapStateStore,{log_out})(Navbar)
