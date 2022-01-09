import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BsBoxArrowRight } from "react-icons/bs";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {Redirect} from "react-router-dom"
import "../styles/home.css"
const Home = ({user}) => {
    console.log(user)
    if(user) return <Redirect to="/" />
    return (
        <div className="home">
            <div className="sub_home">
                <img className="backImg" src="https://res.cloudinary.com/dnjlgmfzq/image/upload/v1634036323/movieTime_joiilf.png" alt="logo" />
                <button  className="btn"><Link to="/signIn">Sign In</Link></button>
            </div>
            <div className="sub_home2">
                <h1>Unlimited movies and TV shows</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <p>Ready to watch? Enter hear for Sign In and restart your membership.</p>
                <button className="btn signIn" > <Link to="/signIn"><span>Get Started   </span>   <BsBoxArrowRight/></Link></button>
                </div>
        </div>
    )
}
const mapStateStore = e=>{
    return{
        user:e.userState.user
    }
}
export default connect(mapStateStore)(Home)
