import * as constants from '../actions/constants';

const initialState = {
    imgBaseUrl: '',
    backDropSizes: [],
    posterSizes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_API_CONFIGURATION:
            return {
                ...state,
                imgBaseUrl: action.config.base_url,
                backDropSizes: action.config.backdrop_sizes,
                posterSizes: action.config.poster_sizes
            }
        default:
            return state
    }

}
export default reducer;