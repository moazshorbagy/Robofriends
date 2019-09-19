// Functions here returns a new state according to the given state and action

import { Actions } from './constants.js';

const initialState = {
    searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload } // using object spread operator

        default:
            return state;
    }
}