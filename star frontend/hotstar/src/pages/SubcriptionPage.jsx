// import { style } from '@mui/system';
import React, { Component } from 'react'
import { BiRupee } from "react-icons/bi";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Navbar from '../component/Navbar';
import { get_subcription } from '../redux/action/subcriptionAction';
import "../styles/subcription.css"
class SubcriptionPage extends Component {

    state={
        amount:99,
        plan:"MONTHLY",
        color1:"yellow",
        color2:"",
        background:"rgba(31,128,224,0.4)" ,
        background1:"" ,
        border:"1px solid #1f80e0" ,
        border1:"" 
    }
componentDidMount(){

}
    handeloffer1 = e=>{
        e.preventDefault()
        this.setState({amount:99,plan:"MONTHLY",color1:"#FEDF7B",color2:" ",border1:"",background1:"",background:"rgba(31,128,224,0.4)",border:"1px solid #1f80e0"})
    }
    handeloffer2 = e=>{
        e.preventDefault()
        this.setState({amount:499,plan:"YEARLY",color1:" ",color2:"#FEDF7B",border:"",background:"",border1:"1px solid #1f80e0",background1:"rgba(31,128,224,0.4)"})
    }
    handelButton = async e=>{
        e.preventDefault()
        const {amount,plan} = this.state
        const responce = await this.props.get_subcription(plan,amount)
        console.log(responce,this.props)
        if(responce?.orderId){
            this.props.history.push(`/payment/${responce.orderId}`)
        }
       
    }
    render() {
        if(!this.props.user) return <Redirect to="/signIn" />
        return (
            <>
            <Navbar/>
            <div className="subcription">
            <div className="subcriptionPage">
                <h1>Subscribe to watch all content on Movies Times</h1>
                <div className="offers" >
                    <div style={{background:this.state.background,border:this.state.border}} onClick={this.handeloffer1}  className="offer1">
                        <h4>Subcribe To</h4>
                        <h2 style={{color:this.state.color1}}>Monthly</h2>
                        <h1><BiRupee/> 99/Month</h1>
                    </div>
                    <div style={{background:this.state.background1,border:this.state.border1}} onClick={this.handeloffer2} className="offer2" >
                        <h4>Subcribe To</h4>
                        <h2 style={{color:this.state.color2}}>Yearly</h2>
                        <h1><BiRupee/> 499/Year</h1>
                    </div>
                </div>
                <div className="payment_btns" >
                    <button onClick={this.handelButton}>subcribe Now To {this.state.plan} plan</button>
                </div>
            </div>
            </div>
            </>
        )
    }
}

const mapStateStore = e=>{
    return{
        user:e.userState.user,
        getSubcription:e.subcriptionState.getSubcription
    }
}
export default connect(mapStateStore,{get_subcription})(SubcriptionPage)
