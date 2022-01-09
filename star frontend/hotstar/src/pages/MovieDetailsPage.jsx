import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Footer from '../component/Footer'
import MoviePlayer from '../component/MoviePlayer'
import Navbar from '../component/Navbar'
import { movie_details } from '../redux/action/movieAction'
import "../styles/movieDetails.css"
 class MovieDetailsPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.movie_details(id)
    }
    render() {
        if(!this.props.user) return <Redirect to="/signIn" />
        if(this.props.user?.user?.isConfirmed === false){
            return alert("plese verify your email") & this.props.history.push(`/myProfile`)}
        // if(this.props.user?.user?.isSubscribe === false ) return <Redirect to="/subcription" />
        if(this.props?.movieDetails?.isPaid === true && this.props.user?.user?.isSubscribe === false ) return <Redirect to="/subcription" />
        return (
            <>
            <Navbar />
            <div className="movieDetailsPage" >
                {this.props.movieDetails ? <MoviePlayer movie={this.props.movieDetails} /> : <h1>Loading.. </h1>}
            </div>
            <Footer/>
            </>
        )
    }
}

const mapStateStore = e=>{
    return{
        movieDetails:e.movieState.movieDetails,
        user:e.userState.user
    }
}

export default connect(mapStateStore,{movie_details})(MovieDetailsPage)
