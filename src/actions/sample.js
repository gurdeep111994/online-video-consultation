import axios from 'axios';

import{ FETCH_DATA } from '../actionCreators/index';

export const sampleAction=(url)=>{
    const request = axios.get(`${url}`)
    .then((response =>response.data))

    return {
        type: FETCH_DATA,
        payload:request
    }
}
