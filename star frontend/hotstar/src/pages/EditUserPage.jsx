import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar } from 'reactstrap'
import { updateUser } from '../redux/action/userAction'

class EditUserPage extends Component {
    state={
        fileUpload:null,
        name:""
    }
    componentDidMount(){
        this.setState({name:this.props.user.name})
    }
    onchangeFile = e=>{
        console.log(e.target.files[0])
        this.setState({fileUpload: e.target.files[0] })
    }
    handelChange = e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handelSubmit =e=>{
        e.preventDefault()
        const {fileUpload,name} = this.state
        if(!fileUpload || !name)return alert("enter the filed")
        this.props.updateUser(name,fileUpload)
    }
    render() {
        return (
            <>
            <Navbar/>
            <div>
                <form encType="multipart/form-data" onSubmit={this.handelSubmit} >

                    <input type="file" name="fileUpload" required onChange={this.onchangeFile} />
                    <input type="submit" value="update" />
                </form>
            </div>
            </>
        )
    }
}
const mapStateStore = stateStore =>{
    return{
        user:stateStore.userState.user.user
    }
}
export default connect(mapStateStore,{updateUser})(EditUserPage)
