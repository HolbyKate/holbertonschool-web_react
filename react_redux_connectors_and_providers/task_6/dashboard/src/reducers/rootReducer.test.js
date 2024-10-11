import { combineReducers } from 'redux';
import { Map } from 'immutable';

// Mock reducers
const coursesReducer = (state = Map({}), action) => state;
const notificationsReducer = (state = Map({}), action) => state;
const uiReducer = (state = Map({}), action) => state;

// Combine reducers
const rootReducer = combineReducers({
    courses: coursesReducer,
    notifications: notificationsReducer,
    ui: uiReducer
});

describe('Root Reducer', () => {
    it('should have the correct initial state structure', () => {
        const initialState = rootReducer(undefined, {});

        expect(initialState).toEqual({
            courses: Map({}),
            notifications: Map({}),
            ui: Map({})
        });
    });

    it('should maintain state for unhandled action types', () => {
        const initialState = {
            courses: Map({ test: 'course' }),
            notifications: Map({ test: 'notification' }),
            ui: Map({ test: 'ui' })
        };

        const newState = rootReducer(initialState, { type: 'UNHANDLED_ACTION' });

        expect(newState).toEqual(initialState);
    });
});