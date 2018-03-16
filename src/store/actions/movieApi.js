import * as constants from './constants';
import { API_CONFIG } from '../../utils/constants';
import axios from 'axios';

export const fetchApiConfigSuccess = (response) => {
    return {
        type: constants.SET_API_CONFIGURATION,
        config: response
    }
}

export const fetchApiConfig = () => {
    return dispatch => {
        axios.get(API_CONFIG).then(response => {
            // console.log(">>>>>>>>>", response);
            dispatch(fetchApiConfigSuccess(response.data.images));
        }).catch(err => {
            console.log("erro no get do fetchApiConfig", err);
        });
    }
}