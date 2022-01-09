import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../component/Footer'
import MovieList from '../component/MovieList'
import Navbar from '../component/Navbar'
import { search_movies } from '../redux/action/movieAction'

 class SearchPage extends Component {

    componentDidMount(){
        console.log(this.props.match.params.query)
        const searchquery=this.props.match.params.query
        this.props.search_movies(searchquery)
    }
    
    componentDidUpdate(preprops){
        const oldprop = preprops.match.params.query
        const newprop = this.props.match.params.query
        console.log(this.props.match.params.query);
        console.log(oldprop,newprop);
        if(oldprop !== newprop){
            this.props.search_movies(newprop)
        }
    }
    
    render() {

        return (
            <>
            <Navbar/>
            <div>
              { this.props.searchMovies ? <MovieList movies={this.props.searchMovies?.movie} props={this.props}  /> : <h1>Loading.. </h1>}
            </div>
            <Footer/>
            </>
        )
    }
}

const mapStateStore = stateStore=>{
    return{
        user:stateStore.userState.user,
        searchMovies:stateStore.movieState.searchMovies
    }
}

export default connect(mapStateStore,{search_movies})(SearchPage)
