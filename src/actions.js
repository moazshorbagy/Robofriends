// Functions here returns an action

import { Actions } from './constants.js';

export const setSearchField = (text) => ({
    type: Actions.CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => async (dispatch) => {
    dispatch({ type: Actions.REQUEST_ROBOTS_PENDING });
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let robots = await response.json();
        dispatch({
            type: Actions.REQUEST_ROBOTS_SUCCESS,
            payload: robots
        });
    } catch (error) {
        dispatch({
            type: Actions.REQUEST_ROBOTS_FAILED,
            payload: error
        });
    }
}