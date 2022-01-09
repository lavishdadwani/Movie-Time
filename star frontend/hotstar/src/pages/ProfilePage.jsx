import { Avatar, Stack } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,Redirect } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { get_user_subcription } from '../redux/action/subcriptionAction'
import { email_verifaction, get_user2 } from '../redux/action/userAction'
import "../styles/profile.css"

class ProfilePage extends Component {
    state={

    }
    componentDidMount(){
      if(this.props.user){
        this.props.get_user_subcription()
      }
    }
    handelClick=e=>{
        e.preventDefault()
        const user = this.props.user
        this.props.email_verifaction(user.user?.email,user.user?.token)
        this.props.history.push("/")
        this.props.get_user2(user?.user.token)
    }

   stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
       stringAvatar(name) {
        return {
          sx: {
            bgcolor: this.stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
      
    render() {
      console.log(this.props)
        if(!this.props.user)return <Redirect to="/signIn"/>
        return (
<>
<Navbar/>
            <div  className="profilePage">
                {/* {this.props.user.photo === null ? <h1>upload photo</h1> : <image src={user.photo} alt="picture" /> } */}
              <div className="profile">
              <Stack direction="row" spacing={2}>
      <Avatar {...this.stringAvatar(this.props.user?.user?.name.toLocaleUpperCase())} />
                    </Stack>
                <h3 style={{textTransform:"capitalize"}} >{ this.props.user?.user?.name} </h3>
                <h3>{this.props.user.user?.email} </h3>
                {this.props.user && this.props.user.user?.isConfirmed === true && <h3>email verified</h3>}
                {this.props.user && this.props.user.user?.isConfirmed === false && <h3>verify your email</h3>}
                {this.props.user && this.props.user.user?.isSubscribe === true ? <h3>your {this.props.userSubcription?.subceibePlan} plan is active which will expire on {new Date(this.props.userSubcription?.planEnd).toDateString()} </h3> : <h3>Plese Subscribe To Watch Movies</h3>}
              </div>
               {  this.props.user?.user?.isThirdParty === false &&  <div className="profileBtn">
               {/* <Link style={{color:"black"}}   to="/editUser">Edit User</Link>  <br /> */}
                <Link style={{color:"black"}} to="/changePassword">Change Password</Link>
                {this.props.user?.user?.isConfirmed ? null :<button onClick={this.handelClick}> click hear to verify Email</button>}
               </div>}
            </div>
            </>
        )
    }
}
const mapStateStore = stateStore =>{
    return{
        user:stateStore.userState.user,
        userSubcription:stateStore.subcriptionState.getUserSubcription
    }
}
export default connect(mapStateStore,{email_verifaction,get_user2,get_user_subcription})(ProfilePage)
