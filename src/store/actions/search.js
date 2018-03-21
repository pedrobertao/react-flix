import * as constants from './constants';
import { API_SEARCH_MOVIE } from '../../utils/constants';
import axios from 'axios';

export const fetchResultsSearchSuccess = (results) => {
    return {
        type: constants.SEARCH_SUCCESS,
        results
    }
}

export const fetchResultsSearchFail = (error) => {
    return {
        type: constants.SEARCH_FAIL,
        error
    }
}

export const fetchResultsSearch = (query) => {
    let fullSearch = `${API_SEARCH_MOVIE}&query=${query}`
    return dispatch => {
        axios.get(fullSearch).then(response => {
            // console.log(">>>>>>>>>", response);
            dispatch(fetchResultsSearchSuccess(response.data.results));
        }).catch(error => {
            dispatch(fetchResultsSearchFail("Algum problema na hora de pesquisar os filmes"));
        });
    }
}