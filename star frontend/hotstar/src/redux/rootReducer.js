import {combineReducers} from "redux"
import newsReducer from "./reducer/SearchNews"
import userReducer from "./reducer/userReducer"
import movieReducer from "./reducer/movieReducer"
import subcriptionReducer from "./reducer/subcriptionReducer"
import watchListReducer from "./reducer/watchlistReducer"
const reducer =combineReducers({
    newsState:newsReducer,
    userState:userReducer,
    movieState:movieReducer,
    subcriptionState:subcriptionReducer,
    watchListState:watchListReducer
})

export default reducer