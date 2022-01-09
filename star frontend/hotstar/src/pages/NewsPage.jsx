import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import NewsList from '../component/NewsList'
import { searchNews, videoDetails } from '../redux/action/newsAction'
 class newsPage extends Component {


    componentDidMount(){
        this.props.searchNews()
        this.props.videoDetails()
      }

    render() {
      if(!this.props.user) return <Redirect to="/signIn" />
        return (
            <div>
               {this.props.news ? <NewsList video={this.props.news.items} /> :<h1>Loading ...</h1>}
            </div>
        )
    }
}

const mapStateStore = stateStore =>{
  return{
    news:stateStore.newsState.news
  }
}


export default connect(mapStateStore,{searchNews,videoDetails})(newsPage)
