import { Actions } from './constants.js';

export const initialState = {
    searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.CHANGE_SEARCH_FIELD:
            // return { ...state, { searchField: action.payload } } // using object spread operator
            return Object.assign({}, state, { searchField: action.payload });

        default:
            return state;
    }
}   