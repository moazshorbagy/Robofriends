import { Action, Actions } from './constants.js';

export const setSearchField = (text) => {
    return Action(Actions.CHANGE_SEARCH_FIELD, text);
}