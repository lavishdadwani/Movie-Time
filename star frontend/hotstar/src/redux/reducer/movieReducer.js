import { ACTION_MOVIE, ALL_MOVIES, DRAMA_MOVIE, ENGLISH_MOVIE, FREE_MOVIE, HINDI_MOVIE, MARVEL_MOVIES, MOVIES_BY_PAGE, MOVIES_BY_PHASE, MOVIES_SEARCH, MOVIE_DETAILS, MOVIE_TOGGLE, SCIENCE_FICTION_MOVIE } from "../actionTypes";

const initialState = {
    movies:null,
    movieToggle:false,
    trendingMovie:null,
    movieDetails:null,
    searchMovies:null,
    hindiMovie:null,
    englishMovie:null,
    movieByPhase:null,
    actionMovie:null,
    dramaMovie:null,
    scienceMovie:null,
    marvelMovies:null,
    freeMovie:null,
    moviePage:null
}

const movieReducer = (state = initialState , action)=>{
    const {payload,type} = action
    switch (type) {
        case ALL_MOVIES:
            return {...state , movies:payload}
            case MOVIE_DETAILS:
                return {...state,movieDetails:payload}
                case MOVIES_SEARCH:
                    return {...state,searchMovies:payload}
                        case MOVIES_BY_PHASE:
                            return {...state ,movieByPhase:payload }
                            case MARVEL_MOVIES:
                                return {...state,marvelMovies:payload}
                                case MOVIE_TOGGLE:
                                    return {...state,movieToggle:!state.movieToggle}
                                    case MOVIES_BY_PAGE:
                                        return {...state,moviePage:payload}
                                        case HINDI_MOVIE:
                                            return {...state,hindiMovie:payload}
                                            case ENGLISH_MOVIE:
                                                return {...state,englishMovie:payload}
                                                case ACTION_MOVIE:
                                                    return {...state,actionMovie:payload}
                                                    case DRAMA_MOVIE:
                                                        return {...state,dramaMovie:payload}
                                                        case SCIENCE_FICTION_MOVIE:
                                                            return {...state,scienceMovie:payload}
                                                            case FREE_MOVIE:
                                                                return {...state,freeMovie:payload}
        default:
            return {...state}
    }
}

export default movieReducer