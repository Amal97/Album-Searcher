import { types } from './types';
import axios from 'axios';

export const fetchAlbums = () => async(dispatch) => {
    await axios.get('http://jsonplaceholder.typicode.com/albums/')
    .then(res => {
        dispatch({
            type: types.GET_ALBUMS,
            payload: res.data
        })
    })
    .catch(err => {
    })
}

export const fetchUsers = () => async(dispatch) => {
    await axios.get('http://jsonplaceholder.typicode.com/users/')
    .then(res => {
        dispatch({
            type: types.GET_USERS,
            payload: res.data
        })
    })
    .catch(err => {
    })
}