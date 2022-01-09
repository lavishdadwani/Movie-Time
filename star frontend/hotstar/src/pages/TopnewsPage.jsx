import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import NewsList from '../component/NewsList'
import { searchNews } from '../redux/action/newsAction'

import "../styles/home.css"
 class TopnewsPage extends Component {
   componentDidMount(){
     this.props.searchNews()
   }
    render() {
        return (
            <>
            <Navbar />
            <div>
                 <div className="top_container">
              <div className="movieHead">
                      <h1>Live News</h1>
                  </div>
                {this.props.topNews ? <NewsList props={this.props} videos={this.props.topNews}/> :<h1>Loading</h1>}
                
              </div>
            </div>
            <Footer/>
            </>
        )
    }
}
const mapStateStore = e=>{
  return{
    topNews:e.newsState.topNews
  }
}
export default connect(mapStateStore,{searchNews})(TopnewsPage)
