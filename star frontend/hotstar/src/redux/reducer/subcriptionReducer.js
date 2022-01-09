const {GET_SUBCRIPTION, SUBCRIPTION_SUCCESS, SUBCRIPTION_TOGGLE, GET_USER_SUBCRIPTION} = require("../actionTypes")
const initialState = {
    getSubcription:null,
    paymentSuccess:null,
    toggleSubcription:false,
    getUserSubcription:null
}


const subcriptionReducer = (state = initialState,action)=>{
    const {type,payload} = action
    switch (type) {
        case GET_SUBCRIPTION:
            return {...state,getSubcription:payload}
            case SUBCRIPTION_SUCCESS:
                return {...state,paymentSuccess:payload}
                case SUBCRIPTION_TOGGLE:
                    return {...state,toggleSubcription:!state.toggleSubcription}
                    case GET_USER_SUBCRIPTION:
                        return {...state,getUserSubcription:payload}
        default:
            return {...state}
    }

}
export default  subcriptionReducer