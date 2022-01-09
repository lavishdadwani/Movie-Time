import { ADD_TO_WATCHLIST, GET_USER_WATCHLIST, REMOVE_FROM_WATCHLIST, WATCHLIST_TOGGLE } from "../actionTypes"

const initialState = {
    getWatchList: null ,
    addWatchList:null,
    removeWatchList:null,
    watchlistToggle:false
}

const watchlistReducer = (state = initialState , action)=>{
    const {payload,type} = action
    switch (type) {
        case GET_USER_WATCHLIST:
            const watchlist1 = JSON.stringify(payload)
            localStorage.setItem("watchList", watchlist1)
            return {...state,getWatchList:payload}
            case ADD_TO_WATCHLIST:
                return {...state,addWatchList:payload}
                case REMOVE_FROM_WATCHLIST:
                    return {...state,removeWatchList:payload}
                    case WATCHLIST_TOGGLE:
                        return {...state,watchlistToggle:!state.watchlistToggle}
        default:
            return {...state}
    }
}


export default watchlistReducer