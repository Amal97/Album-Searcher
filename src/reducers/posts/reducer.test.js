import { types } from './../../actions/types';
import postsReducer from './reducer';

describe('Posts Reducer', () => {
    it('Should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual({"albums": [], "users": []});
    });

    it('Should return new state for album', () => {
        const posts = [{title: 'Test 1'},{title: 'Test 2'},{title: 'Test 3'}]
        const expected = {"albums": [{"title": "Test 1"}, {"title": "Test 2"}, {"title": "Test 3"}], "users": []};
        const newState = postsReducer(undefined, {
            type: types.GET_ALBUMS,
            payload : posts
        });
        expect(newState).toEqual(expected);
    });

    it('Should return new state for users', () => {
        const posts = [{title: 'Test 1'},{title: 'Test 2'},{title: 'Test 3'}]
        const expected = {"users": [{"title": "Test 1"}, {"title": "Test 2"}, {"title": "Test 3"}], "albums": []};
        const newState = postsReducer(undefined, {
            type: types.GET_USERS,
            payload : posts
        });
        expect(newState).toEqual(expected);
    });
});