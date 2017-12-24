import {} from 'jasmine';
import ACTIONS from '../src/static/ACTIONS';
import * as reducer from '../src/reducers/app';

describe('Test for reducers', () => {
    describe('Reducers from src/reducer', () => {
        var defaultProps = {
            loader: false,
            loginModal: true,
            snackbar: false
        };
        it('shouldnt return undefined', () => {
            expect(reducer.default(
                defaultProps,
                {type: ACTIONS.ADD_TO_FAVOURITE})
            ).not.toBeUndefined();
        });
        it('should return object', () => {
            expect(typeof(reducer.default(
                defaultProps,
                {type: ACTIONS.ADD_TO_FAVOURITE})
            )).toEqual('object');
        });
    });
});