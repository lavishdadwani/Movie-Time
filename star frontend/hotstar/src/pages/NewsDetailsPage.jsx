import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import NewsPlayer from '../component/NewsPlayer'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { searchNews, videoDetails } from '../redux/action/newsAction'
import NewsList from '../component/NewsList'

class NewsDetailsPage extends Component {

    state={
        params:this.props.match.params.id
    }
    componentDidMount(){
        if(!this.state.params) return <Redirect to="/home" />
        this.props.searchNews()
        this.props.videoDetails(this.state.params)
    }
    componentDidUpdate(preprops){
        const oldprop = preprops.match.params.id
        const newprop = this.props.match.params.id
        console.log(this.props.match.params.id);
        console.log(oldprop,newprop);
        if(oldprop !== newprop){
            this.props.videoDetails(newprop)
        }
    }
    
    handelNewsPage=e=>{
        e.preventDefault()
        this.props.history.push("/topNews")
    }
    render() {
        return (
            <>
            <Navbar />
            <div className="newsDetailsPage" >
              {this.props.newsDetails ? <NewsPlayer video={this.props.newsDetails.items[0]} /> : <h1>Loading... </h1>}
            </div>

            <div className="top_container">
              <div className="movieHead">
                      <h1>TOP News</h1>
                  </div>
                {this.props.someNews ? <NewsList props={this.props} videos={this.props.someNews}/> :<h1>Loading</h1>}
                <div style={{justifyContent:"flex-end"}} className="homeBtns">
                    <button  className="next"  onClick={this.handelNewsPage}>Show All News</button>
              </div>
              </div>

            <Footer />
            </>
        )
    }
}

const mapStateStore = e=>{
    return{
        newsDetails:e.newsState.newsDetails,
        someNews:e.newsState.someNews
    }
}
export default connect(mapStateStore,{videoDetails,searchNews})(NewsDetailsPage)
