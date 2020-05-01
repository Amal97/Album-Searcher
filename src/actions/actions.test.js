import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchAlbums } from './index';

describe('fetchAlbums action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const input = ['Example title 1','Example title 2','Example title 3'];
        const expectedState = {"albums": ["Example title 1", "Example title 2", "Example title 3"], "users": []};
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: input
            })
        });

        return store.dispatch(fetchAlbums())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toStrictEqual(expectedState);
        })
        
    });

});