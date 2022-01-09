import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Footer from '../component/Footer'
import MovieList from '../component/MovieList'
import MovieList2 from '../component/MovieList2'
import Navbar from "../component/Navbar"
import NewsList from '../component/NewsList'
import Search from '../component/Search'
import { action_movies, marvel_movies, movies_by_page,drama_movies,science_movies,hindi_movies,english_movies, free_movies } from '../redux/action/movieAction'
import { searchNews } from '../redux/action/newsAction'
import { get_user2 } from '../redux/action/userAction'
import { get_watchlist_user } from '../redux/action/watchlistAction'
import "../styles/home.css"
import styled from 'styled-components';
class HomePage extends Component {

    state={
        limit:6,
        page:1,
        page1:1,
        page2:1,
        page3:1,
        page4:1,
        page5:1,
        page6:1,
        page7:1,
        page8:1,
        content:"flex-end",
        content1:"flex-end",
        content2:"flex-end",
        content3:"flex-end",
        content4:"flex-end",
        content5:"flex-end",
        content6:"flex-end",
        content7:"flex-end",
        content8:"flex-end",
    }

    componentDidMount(){
        const {page,limit,page1,page2,page3,page4,page5,page6,page7} = this.state
        this.props.marvel_movies(page,limit)
        this.props.movies_by_page(page1,limit)
        this.props.hindi_movies(page2,limit)
        this.props.english_movies(page3,limit)
        this.props.action_movies(page4,limit)
        this.props.science_movies(page5,limit)
        this.props.drama_movies(page6,limit)
        this.props.free_movies(page7,limit)
        this.props.get_watchlist_user()
        this.props.searchNews()
        if(this.props.user?.user?.token){
            this.props.get_user2(this.props.user.user.token)
        }
    }
    handelNextPage=e=>{
        e.preventDefault()
        const {page,limit} = this.state
        if(page === 1)this.setState({content:""})
        this.props.marvel_movies(page+1,limit)
        this.setState({page:this.state.page + 1})
    }
    handelPrevPage=e=>{
        e.preventDefault()
        const {page,limit} = this.state
        if(page ===2)this.setState({content:"flex-end"})
        this.props.marvel_movies(page-1,limit)
        this.setState({page:this.state.page - 1})
    }
    handelNextPage2=e=>{
        e.preventDefault()
        const {page1,limit} = this.state
        if(page1 === 1)this.setState({content1:""})
        this.props.movies_by_page(page1+1,limit)
        this.setState({page1:this.state.page1 + 1})
    }
    handelPrevPage2=e=>{
        e.preventDefault()
        const {page1,limit} = this.state
        if(page1 ===2)this.setState({content1:"flex-end"})
        this.props.movies_by_page(page1-1,limit)
        this.setState({page1:this.state.page1 - 1})
    }

    handelNextPage3=e=>{
        e.preventDefault()
        const {page2,limit} = this.state
        if(page2 === 1)this.setState({content2:""})
        this.props.hindi_movies(page2+1,limit)
        this.setState({page2:this.state.page2 + 1})
    }
    handelPrevPage3=e=>{
        e.preventDefault()
        const {page2,limit} = this.state
        if(page2 ===2)this.setState({content2:"flex-end"})
        this.props.hindi_movies(page2-1,limit)
        this.setState({page2:this.state.page2 - 1})
    }

    
    handelNextPage4=e=>{
        e.preventDefault()
        const {page3,limit} = this.state
        if(page3 === 1)this.setState({content3:""})
        this.props.english_movies(page3+1,limit)
        this.setState({page3:this.state.page3 + 1})
    }
    handelPrevPage4=e=>{
        e.preventDefault()
        const {page3,limit} = this.state
        if(page3 ===2)this.setState({content3:"flex-end"})
        this.props.english_movies(page3-1,limit)
        this.setState({page3:this.state.page3 - 1})
    }

    handelNextPage5=e=>{
        e.preventDefault()
        const {page4,limit} = this.state
        if(page4 === 1)this.setState({content4:""})
        this.props.action_movies(page4+1,limit)
        this.setState({page4:this.state.page4 + 1})
    }
    handelPrevPage5=e=>{
        e.preventDefault()
        const {page4,limit} = this.state
        if(page4 ===2)this.setState({content4:"flex-end"})
        this.props.action_movies(page4-1,limit)
        this.setState({page4:this.state.page4 - 1})
    }

    handelNextPage6=e=>{
        e.preventDefault()
        const {page5,limit} = this.state
        if(page5 === 1)this.setState({content5:""})
        this.props.science_movies(page5+1,limit)
        this.setState({page5:this.state.page5 + 1})
    }
    handelPrevPage6=e=>{
        e.preventDefault()
        const {page5,limit} = this.state
        if(page5 ===2)this.setState({content5:"flex-end"})
        this.props.science_movies(page5-1,limit)
        this.setState({page5:this.state.page5 - 1})
    }

    handelNextPage7=e=>{
        e.preventDefault()
        const {page6,limit} = this.state
        if(page6 === 1)this.setState({content6:""})
        this.props.drama_movies(page6+1,limit)
        this.setState({page6:this.state.page6 + 1})
    }
    handelPrevPage7=e=>{
        e.preventDefault()
        const {page6,limit} = this.state
        if(page6 ===2)this.setState({content6:"flex-end"})
        this.props.drama_movies(page6-1,limit)
        this.setState({page6:this.state.page6 - 1})
    }

    handelNextPage8=e=>{
        e.preventDefault()
        const {page7,limit} = this.state
        if(page7 === 1)this.setState({content7:""})
        this.props.free_movies(page7+1,limit)
        this.setState({page7:this.state.page7 + 1})
    }
    handelPrevPage8=e=>{
        e.preventDefault()
        const {page7,limit} = this.state
        if(page7 ===2)this.setState({content7:"flex-end"})
        this.props.free_movies(page7-1,limit)
        this.setState({page7:this.state.page7 - 1})
    }
    handelNextPage9=e=>{
        e.preventDefault()
        const {page7,limit} = this.state
        if(page7 === 1)this.setState({content7:""})
        this.props.free_movies(page7+1,limit)
        this.setState({page7:this.state.page7 + 1})
    }
    handelPrevPage9=e=>{
        e.preventDefault()
        const {page7,limit} = this.state
        if(page7 ===2)this.setState({content7:"flex-end"})
        this.props.free_movies(page7-1,limit)
        this.setState({page7:this.state.page7 - 1})
    }
    handelNewsPage=e=>{
        e.preventDefault()
        this.props.history.push("/topNews")
    }
    render() {
        if(!this.props.user) return <Redirect to="/signIn" />
        console.log(this.props.user)
        return (
            <div style={{width:"100vw"}}>
            <Navbar/>
              <>
              <Container1>
            <Search props={this.props}/>
              <Container>
              
                      <h1>All  Movies</h1>
                
                {this.props.moviePage ? <MovieList props={this.props} movies={this.props.moviePage}/> :<h1>Loading</h1>}

                <div style={{justifyContent:this.state.content1}} className="homeBtns">

               { this.state.page1 > 1 && <div> <button  className="prev" onClick={this.handelPrevPage2}>prev page</button> </div>}
               { this.props.moviePage?.length  > 5 && <div> <button className="next" onClick={this.handelNextPage2}>next page</button> </div>}
                </div>
                </Container>


              <Container>
                
                      <h1>All Marvel Movies</h1>
                  
              {this.props.marvelMovies ? <MovieList props={this.props} movies={this.props.marvelMovies}/> :<h1>Loading</h1>}
              <div style={{justifyContent:this.state.content}} className="homeBtns">

               { this.state.page >1 ? <div> <button className="prev" onClick={this.handelPrevPage}>prev page</button> </div> : null}
               { this.props.marvelMovies?.length  > 5 ? <div> <button className="next" onClick={this.handelNextPage}>next page</button></div> : null}
              </div>
              </Container>


              { this.props.userWatchlist?.length > 0 ?  <div className="top_container">
                
                      <h1>Movies Watchlist</h1>
              {this.props.userWatchlist ? <MovieList2 props={this.props} movies={this.props.userWatchlist}/> :<h1>Loading</h1>}
              {/* <div style={{justifyContent:this.state.content7}} className="homeBtns"> */}
{/* 
               { this.state.page >1 && <div> <button className="prev" onClick={this.handelPrevPage9}>prev page</button> </div>}
               { this.props.marvelMovies?.length  > 5 && <div> <button className="next" onClick={this.handelNextPage9}>next page</button></div>} */}
              {/* </div> */}
              </div> : null}

              <div className="top_container">
               
                      <h1>Hindi Movies</h1>
              {this.props.hindiMovie ? <MovieList props={this.props} movies={this.props.hindiMovie}/> :<h1>Loading</h1>}
              <div style={{justifyContent:this.state.content2}} className="homeBtns">

               { this.state.page2 >1 && <div> <button className="prev" onClick={this.handelPrevPage3}>prev page</button> </div>}
               { this.props.hindiMovie?.length  > 5 && <div> <button className="next" onClick={this.handelNextPage3}>next page</button></div>}
              </div>
              </div>


              <div className="top_container">
                  <div className="movieHead">
                      <h1>English Movies</h1>
                  </div>
              {this.props.englishMovie ? <MovieList props={this.props} movies={this.props.englishMovie}/> :<h1>Loading</h1>}
              <div style={{justifyContent:this.state.content3}} className="homeBtns">

               { this.state.page3 >1 && <div> <button className="prev" onClick={this.handelPrevPage4}>prev page</button> </div>}
               { this.props.englishMovie?.length  > 5 && <div> <button className="next" onClick={this.handelNextPage5}>next page</button></div>}
              </div>
              </div>


              <div className="top_container">
                  <div className="movieHead">
                      <h1>Action Movies</h1>
                  </div>
              {this.props.actionMovie ? <MovieList props={this.props} movies={this.props.actionMovie}/> :<h1>Loading</h1>}
              <div style={{justifyContent:this.state.content4}} className="homeBtns">

               { this.state.page4 >1 && <div> <button  className="prev" onClick={this.handelPrevPage5}>prev page</button> </div>}
               { this.props.actionMovie?.length  > 5 && <div> <button className="next" onClick={this.handelNextPage5}>next page</button></div>}
              </div>
              </div>


              <div className="top_container">
                  <div className="movieHead">
                      <h1>Science Movies</h1>
                  </div>
              {this.props.scienceMovie ? <MovieList props={this.props} movies={this.props.scienceMovie}/> :<h1>Loading</h1>}
              <div style={{justifyContent:this.state.content5}} className="homeBtns">

               { this.state.page5 >1 && <div> <button className="prev" onClick={this.handelPrevPage6}>prev page</button> </div>}
               { this.props.scienceMovie?.length  > 5 && <div> <button className="next" onClick={this.handelNextPage6}>next page</button></div>}
              </div>
              </div>


              <div className="top_container">
                  <div className="movieHead">
                      <h1>Drama Movies</h1>
                  </div>
              {this.props.dramaMovie ? <MovieList props={this.props} movies={this.props.dramaMovie}/> :<h1>Loading</h1>}
              <div style={{justifyContent:this.state.content6}} className="homeBtns">

               { this.state.page6 >1 && <div> <button className="prev" onClick={this.handelPrevPage7}>prev page</button> </div>}
               { this.props.dramaMovie?.length  > 5 && <div> <button className="next" onClick={this.handelNextPage7}>next page</button></div>}
              </div>
              </div>

              <div className="top_container">
                  <div className="movieHead">
                      <h1>Free Movies</h1>
                  </div>
              {this.props.freeMovie ? <MovieList props={this.props} movies={this.props.freeMovie}/> :<h1>Loading</h1>}
              <div style={{justifyContent:this.state.content7}} className="homeBtns">

               { this.state.page7 >1 && <div> <button className="prev" onClick={this.handelPrevPage8}>prev page</button> </div>}
               { this.props.freeMovie?.length  > 5 && <div> <button className="next" onClick={this.handelNextPage8}>next page</button></div>}
              </div>
              </div>

              <div className="top_container">
              <div className="movieHead">
                      <h1>Live News</h1>
                  </div>
                {this.props.news ? <NewsList props={this.props} videos={this.props.news}/> :<h1>Loading</h1>}
                
              </div>

              <div className="top_container">
              <div className="movieHead">
                      <h1>TOP News</h1>
                  </div>
                {this.props.someNews ? <NewsList props={this.props} videos={this.props.someNews}/> :<h1>Loading</h1>}
                <div style={{justifyContent:this.state.content}} className="homeBtns">
                    <button  className="next"  onClick={this.handelNewsPage}>Show All News</button>
              </div>
              </div>
              </Container1>
              </>
              
               <Footer/>
            </div>
        )
    }
}
const mapStateStore = stateStore =>{
    return{
        user:stateStore.userState.user,
        moviePage:stateStore.movieState.moviePage,
        marvelMovies:stateStore.movieState.marvelMovies,
        news:stateStore.newsState.news,
        topNews:stateStore.newsState.topNews,
       someNews:stateStore.newsState.someNews,
       actionMovie:stateStore.movieState.actionMovie,
       hindiMovie:stateStore.movieState.hindiMovie,
       englishMovie:stateStore.movieState.englishMovie,
       dramaMovie:stateStore.movieState.dramaMovie,
       scienceMovie:stateStore.movieState.scienceMovie,
       freeMovie:stateStore.movieState.freeMovie,
       userWatchlist:stateStore.watchListState.getWatchList
    }
}
const Container = styled.div`
  
`;

const Container1 = styled.main`
position:relative;
min-height: calc(100vh - 250px);
overflow-x:hidden;
display:block;
padding: 0 calc(3.5vw + 5px);

 &:after{
    background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
    content:"";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index:  -1;
 }
`

export default connect(mapStateStore,{get_watchlist_user,get_user2,marvel_movies,movies_by_page,searchNews,hindi_movies,english_movies,action_movies,science_movies,drama_movies,free_movies})(HomePage)
