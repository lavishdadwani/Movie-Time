const { REGISTER_USER, LOGIN_USER, LOGOUT_USER, TOGGLE_AUTH_USER, UPDATE_USER, CHANGE_USER_PASSWORD, GOOGLE_LOGIN, FIND_EMAIL, FORGOT_PASSWORD, GET_USER, EMAIL_VERIICATION, GET_USER2 } = require("../actionTypes");

const initialState = {
    user:JSON.parse(localStorage.getItem("user") ) || null ,
    toggleAuthUser:false,
    forgotPassword:null,
    updateUser:null,
    changePassword:null,
    findEmail:null,
    getUser:null,
    emailVerification:null
}

const userReducer = (state = initialState, action )=>{
    const {payload,type} = action
    switch (type) {
        case REGISTER_USER:
            const user = JSON.stringify(payload)
            localStorage.setItem("user",user)
            return {...state,user:payload}
            case LOGIN_USER:
                const user1 = JSON.stringify(payload)
                localStorage.setItem("user",user1)
                return {...state,user:payload}
                case LOGOUT_USER:
                    localStorage.removeItem("user")
                    localStorage.removeItem("watchList")
                    return {...state,user:payload}
                    case UPDATE_USER:
                        return {...state,updateUser:payload}
                    case TOGGLE_AUTH_USER:
                        return {...state,toggleAuthUser:!state.toggleAuthUser}
                        case CHANGE_USER_PASSWORD:
                            return {...state,changePassword:payload}
                            case GOOGLE_LOGIN:
                                const user3 = JSON.stringify(payload)
                                localStorage.setItem("user",user3)
                                return {...state,user:payload}
                                case FIND_EMAIL:
                                    return {...state,findEmail:payload}
                                    case FORGOT_PASSWORD:
                                        return {...state,forgotPassword:payload}
                                        case GET_USER:
                                            return {...state,getUser:payload}
                                            case GET_USER2:
                                                const user2 = JSON.stringify(payload)
                                                localStorage.setItem("user",user2)
                                                return {...state,user:payload}
                                            case EMAIL_VERIICATION:
                                                return {...state,emailVerification:payload}
        default:
           return state
    }
}


export default userReducer