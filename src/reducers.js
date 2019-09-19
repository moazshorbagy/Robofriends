// Functions here returns a new state according to the given state and action

import { combineReducers } from 'redux';

import { Actions } from './constants.js';

const initialStateSearch = {
    searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case Actions.CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload } // using object spread operator

        default:
            return state;
    }
}

const initialStateRequest = {
    isPending: false,
    robots: [],
    error: ''
};

export const requestRobots = (state = initialStateRequest, action = {}) => {
    switch (action.type) {
        case Actions.REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true }

        case Actions.REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false }

        case Actions.REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false }

        default:
            return state;
    }
}

export const rootReducer = combineReducers({ searchRobots, requestRobots });