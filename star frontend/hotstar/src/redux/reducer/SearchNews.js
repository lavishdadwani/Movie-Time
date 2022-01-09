import { NEWS_DETAILS, SEARCH_NEWS, SEARCH_NEWS_TOGGLE, SOME_NEWS, TOP_NEWS } from "../actionTypes"

const initialState = {
    news:null,
    topNews:null,
    newsToggle:false,
    newsDetails:null,
    someNews:null
}


const NewsReducer = (state = initialState ,action )=>{
    const {type , payload} = action
    switch(type){
        case SEARCH_NEWS:
            return {...state,news:payload}
            case SEARCH_NEWS_TOGGLE:
                return {...state,newsToggle:payload}
                case NEWS_DETAILS:
                    return {...state,newsDetails:payload}
                    case TOP_NEWS:
                        return {...state,topNews:payload}
                        case SOME_NEWS:
                            return {...state,someNews:payload}
                default:
                     return {...state}
    }
}

export default NewsReducer