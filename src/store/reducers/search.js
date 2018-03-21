import * as constants from '../actions/constants';

const initialState = {
    searchQuery: '',
    results: [],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_START:
            return {
                ...state,
                searchQuery: action.query,
                isLoading: true
            }
        case constants.SEARCH_SUCCESS:
            return {
                ...state,
                results: action.results,
                isLoading: false
            }

        case constants.SEARCH_FAIL:
            console.log(">>>Reducer", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }

}
export default reducer;