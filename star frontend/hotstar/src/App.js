import React from 'react'
import {Switch,Redirect,Route} from "react-router-dom"
import Home from './component/Home'
import ChangePassword from './pages/ChangePassword'
import EditUserPage from './pages/EditUserPage'
import ForgotPassword from './pages/ForgotPassword'
import Forgotpassword2 from './pages/Forgotpassword222'
import HomePage from './pages/HomePage'
import LogInPage from './pages/LogInPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import newsPage from './pages/NewsPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import SearchPage from "./pages/SearchPage"
import SubcriptionPage from './pages/SubcriptionPage'
import RazorpayPage from "./pages/RazorpayPage"
import NewsDetailsPage from './pages/NewsDetailsPage'
import TopnewsPage from './pages/TopnewsPage'

function App() {
  return (
    <>
    {/* <Search/> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/display" component={Home} />
        <Route exact path="/news" component={newsPage} />
        <Route exact path="/signIn" component={LogInPage}/>
        <Route exact path="/signUp" component={RegisterPage}/>
        <Route exact path="/myProfile" component={ProfilePage} />
        <Route exact path="/editUser" component={EditUserPage} /> 
        <Route exact path="/changePassword" component={ChangePassword} /> 
        <Route exact path="/forgotPassword" component={ForgotPassword} /> 
        <Route exact path="/passwordforgotchange/:token" component={Forgotpassword2} /> 
        <Route exact path="/search/:query" component={SearchPage} /> 
        <Route exact path="/subcription" component={SubcriptionPage} /> 
        <Route exact path="/payment/:order" component={RazorpayPage} /> 
        <Route exact path="/topNews" component={TopnewsPage} /> 
        <Route exact path="/movieDetails/:id" component={MovieDetailsPage} /> 
        <Route exact path="/newsDetails/:id" component={NewsDetailsPage} /> 
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
