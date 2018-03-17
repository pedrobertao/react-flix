import * as constants from './constants';
import { API_SEARCH_MOVIE } from '../../utils/constants';
import axios from 'axios';

export const fetchResultsSearchSucces = (results) => {
    return {
        type: constants.SEARCH_SUCCESS,
        results: results
    }
}

export const fetchResultsSearch = (query) => {
    let fullSearch = `${API_SEARCH_MOVIE}&query=${query}`
    return dispatch => {
        axios.get(fullSearch).then(response => {
            // console.log(">>>>>>>>>", response);
            dispatch(fetchResultsSearchSucces(response.data.results));
        }).catch(err => {
            console.log("erro no get do fetchResultsSearch", err);
        });
    }
}