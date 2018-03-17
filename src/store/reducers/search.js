import * as constants from '../actions/constants';

const initialState = {
    searchQuery: '',
    results: [],
    isLoading: false,
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
        default:
            return state
    }

}
export default reducer;