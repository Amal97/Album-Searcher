import { types } from './../../actions/types';

const initialState = {
    albums:[],
    users:[],
}


export default (state=initialState, action) => {
    switch(action.type){
        case types.GET_ALBUMS:
            return {
                ...state,
                albums: action.payload
            };
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }  
};